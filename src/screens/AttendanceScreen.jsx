import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    StatusBar
} from 'react-native';

export default function AttendanceScreen({ navigation }) {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Mock attendance data
    // Status: 'present', 'absent', 'checkin-only'
    const attendanceData = {
        '2026-02-01': 'absent',
        '2026-02-02': 'absent',
        '2026-02-03': 'absent',
        '2026-02-04': 'absent',
        '2026-02-05': 'absent',
        '2026-02-06': 'checkin-only',
        // Example past data for viz
        '2026-01-15': 'present',
        '2026-01-16': 'present',
    };

    const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        let day = new Date(year, month, 1).getDay();
        return day === 0 ? 6 : day - 1; // Adjust for Monday start
    };

    const changeMonth = (offset) => {
        const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1);
        setCurrentMonth(newDate);
    };

    const renderCalendar = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);

        const days = [];

        // Empty slots
        for (let i = 0; i < firstDay; i++) {
            days.push(<View key={`empty-${i}`} style={styles.emptyDateBox} />);
        }

        // Days
        for (let i = 1; i <= daysInMonth; i++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            const isSelected = dateStr === selectedDate;
            const status = attendanceData[dateStr];

            let bgStyle = {};
            let textStyle = {};

            if (status === 'present') {
                bgStyle = styles.presentBg;
            } else if (status === 'absent') {
                bgStyle = styles.absentBg;
            } else if (status === 'checkin-only') {
                bgStyle = styles.checkinBg;
            }

            if (isSelected) {
                // Determine highlight style? 
                // In screenshot, current date 6 (checkin-only) is yellow square.
                // Others are circles?
                // Actually screenshot shows:
                // 1-5 Red circles (Absent)
                // 6 Yellow square (Selected & Checkin-only?)
                // Let's make selection a square border or overlay, and status determines inner color.
            }

            days.push(
                <TouchableOpacity
                    key={dateStr}
                    style={[
                        styles.dateBox,
                        bgStyle,
                        isSelected && styles.selectedDateBox // Square selection overlay
                    ]}
                    onPress={() => setSelectedDate(dateStr)}
                >
                    <Text style={[styles.dateText, textStyle]}>
                        {i}
                    </Text>
                </TouchableOpacity>
            );
        }

        return days;
    };

    const getStatusText = (date) => {
        const status = attendanceData[date];
        if (status === 'present') return 'Present';
        if (status === 'absent') return 'Absent';
        if (status === 'checkin-only') return 'Check-in Only';
        return 'No attendance record';
    };

    const getStatusColor = (date) => {
        const status = attendanceData[date];
        if (status === 'present') return 'green';
        if (status === 'absent') return 'red';
        if (status === 'checkin-only') return '#F1C40F';
        return '#FF5252'; // default redish for no record as per screenshot
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#rgba(0,0,0,0.5)" translucent={true} />

            {/* Modal-like Card Container */}
            <View style={styles.modalContainer}>

                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        Attendance - {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>✕</Text>
                    </TouchableOpacity>
                </View>

                {/* Calendar */}
                <View style={styles.calendarContainer}>
                    <View style={styles.monthNavRow}>
                        <TouchableOpacity onPress={() => changeMonth(-1)} style={styles.navButton}>
                            <Text>«</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeMonth(-1)} style={styles.navButton}>
                            <Text>‹</Text>
                        </TouchableOpacity>

                        <Text style={styles.monthDisplay}>
                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </Text>

                        <TouchableOpacity onPress={() => changeMonth(1)} style={[styles.navButton, styles.activeNav]}>
                            <Text>›</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeMonth(1)} style={styles.navButton}>
                            <Text>»</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.weekdaysRow}>
                        {daysOfWeek.map(day => (
                            <Text key={day} style={styles.weekdayText}>{day}</Text>
                        ))}
                    </View>

                    <View style={styles.datesGrid}>
                        {renderCalendar()}
                    </View>
                </View>

                {/* Details */}
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailDate}>
                        Selected Date: {new Date(selectedDate).toDateString()}
                    </Text>
                    <Text style={[styles.detailStatus, { color: getStatusColor(selectedDate) }]}>
                        {getStatusText(selectedDate)}
                    </Text>
                </View>

                {/* Legend */}
                <View style={styles.legendContainer}>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendBox, styles.presentBox]} />
                        <Text style={styles.legendText}>Present</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendBox, styles.checkinBox]} />
                        <Text style={styles.legendText}>Check-in Only</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendBox, styles.absentBox]} />
                        <Text style={styles.legendText}>Absent</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)', // Dimmed background effect
        justifyContent: 'center',
        padding: 20,
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        height: '80%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    closeButton: {
        padding: 10,
    },
    closeButtonText: {
        fontSize: 20,
        color: '#666',
    },
    calendarContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    monthNavRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    navButton: {
        padding: 10,
    },
    activeNav: {
        backgroundColor: '#E0E0E0',
        borderRadius: 5,
    },
    monthDisplay: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    weekdaysRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    weekdayText: {
        width: 35,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#000',
    },
    datesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dateBox: {
        width: '14.28%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20, // Circular by default
        marginVertical: 2,
    },
    emptyDateBox: {
        width: '14.28%',
        aspectRatio: 1,
    },
    selectedDateBox: {
        borderRadius: 0, // Square when selected? or just highlight
        borderWidth: 2,
        borderColor: '#3B82F6',
    },
    presentBg: { backgroundColor: '#A5D6A7' }, // Light Green
    absentBg: { backgroundColor: '#FFCDD2' }, // Light Red
    checkinBg: { backgroundColor: '#FFF59D' }, // Light Yellow

    presentBox: { backgroundColor: '#A5D6A7' },
    absentBox: { backgroundColor: '#FFCDD2' },
    checkinBox: { backgroundColor: '#FFF59D' },

    dateText: {
        fontSize: 14,
        color: '#333',
    },
    detailsContainer: {
        backgroundColor: '#F9F9F9',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    detailDate: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    detailStatus: {
        fontSize: 14,
        fontWeight: '500',
    },
    legendContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    legendBox: {
        width: 15,
        height: 15,
        borderRadius: 4,
        marginRight: 5,
    },
    legendText: {
        fontSize: 12,
        color: '#333',
    },
});
