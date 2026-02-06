import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    StatusBar,
    TextInput
} from 'react-native';

export default function TaskManagerScreen({ navigation }) {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [tasks, setTasks] = useState({}); // { "2023-10-27": ["Task 1", "Task 2"] }
    const [newTask, setNewTask] = useState('');

    const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        let day = new Date(year, month, 1).getDay();
        // Adjust so 0 = Monday, 6 = Sunday to match UI
        return day === 0 ? 6 : day - 1;
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

        // Empty slots for previous month
        for (let i = 0; i < firstDay; i++) {
            days.push(<View key={`empty-${i}`} style={styles.emptyDateBox} />);
        }

        // Days of current month
        for (let i = 1; i <= daysInMonth; i++) {
            // Format: YYYY-MM-DD
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            const isSelected = dateStr === selectedDate;

            // Check if today (red highlight in screenshot for '1', '7', etc? 
            // In screenshot '6' is blue (selected). 1,7,8,14,15,21,22,28 are red? Are those weekends?
            // checking date obj for weekend
            const d = new Date(year, month, i);
            const isWeekend = d.getDay() === 0 || d.getDay() === 6; // Sun or Sat

            days.push(
                <TouchableOpacity
                    key={dateStr}
                    style={[
                        styles.dateBox,
                        isSelected && styles.selectedDateBox
                    ]}
                    onPress={() => setSelectedDate(dateStr)}
                >
                    <Text style={[
                        styles.dateText,
                        isSelected && styles.selectedDateText,
                        !isSelected && isWeekend && styles.weekendDateText
                    ]}>
                        {i}
                    </Text>
                </TouchableOpacity>
            );
        }

        return days;
    };

    const addTask = () => {
        if (newTask.trim().length === 0) return;

        const currentTasks = tasks[selectedDate] || [];
        setTasks({
            ...tasks,
            [selectedDate]: [...currentTasks, newTask]
        });
        setNewTask('');
    };

    const currentTasks = tasks[selectedDate] || [];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F5F9FF" />
            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backBtnText}>Back</Text>
                    </TouchableOpacity>
                    <View style={styles.titleContainer}>
                        <Text style={styles.headerTitle}>📅 Task Manager</Text>
                    </View>
                    <View style={{ width: 50 }} />
                </View>

                {/* Calendar Card */}
                <View style={styles.calendarCard}>
                    <View style={styles.monthHeader}>
                        <TouchableOpacity onPress={() => changeMonth(-1)}>
                            <Text style={styles.arrowText}>« ‹</Text>
                        </TouchableOpacity>
                        <Text style={styles.monthTitle}>
                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </Text>
                        <TouchableOpacity onPress={() => changeMonth(1)}>
                            <Text style={styles.arrowText}>› »</Text>
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

                    <View style={styles.statsContainer}>
                        <Text style={styles.statItem}>📅 Selected: <Text style={styles.boldText}>{selectedDate}</Text></Text>
                        <Text style={styles.statItem}>✅ Done: <Text style={styles.boldText}>0</Text></Text>
                        <Text style={styles.statItem}>📌 Pending: <Text style={styles.boldText}>0</Text></Text>
                        <Text style={styles.statItem}>📊 Total: <Text style={styles.boldText}>{currentTasks.length}</Text></Text>
                    </View>
                </View>

                {/* Task List Section */}
                <View style={styles.taskListContainer}>
                    <Text style={styles.taskListTitle}>Tasks for {selectedDate}</Text>

                    <View style={styles.addTaskRow}>
                        <TextInput
                            style={styles.taskInput}
                            placeholder="Add new task..."
                            value={newTask}
                            onChangeText={setNewTask}
                        />
                        <TouchableOpacity style={styles.addButton} onPress={addTask}>
                            <Text style={styles.addButtonText}>+ Add</Text>
                        </TouchableOpacity>
                    </View>

                    {currentTasks.length === 0 ? (
                        <Text style={styles.noTasksText}>No tasks for this day.</Text>
                    ) : (
                        currentTasks.map((task, index) => (
                            <View key={index} style={styles.taskItem}>
                                <Text style={styles.taskText}>• {task}</Text>
                            </View>
                        ))
                    )}
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50,
        backgroundColor: '#F5F9FF',
    },
    scrollContent: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    backBtn: {
        backgroundColor: '#E0E0E0',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    backBtnText: {
        color: '#555',
        fontWeight: 'bold',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#3B3B98',
        marginLeft: 10,
    },
    calendarCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        elevation: 3,
        marginBottom: 20,
    },
    monthHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    arrowText: {
        fontSize: 20,
        color: '#555',
        padding: 10,
    },
    monthTitle: {
        fontSize: 18,
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
        justifyContent: 'flex-start',
    },
    dateBox: {
        width: '14.28%', // 100% / 7
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    emptyDateBox: {
        width: '14.28%',
        aspectRatio: 1,
    },
    selectedDateBox: {
        backgroundColor: '#3B82F6',
        borderRadius: 5,
    },
    dateText: {
        fontSize: 14,
        color: '#333',
    },
    weekendDateText: {
        color: '#D32F2F', // Red for holidays/weekends
    },
    selectedDateText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    statsContainer: {
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        paddingTop: 15,
    },
    statItem: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    boldText: {
        fontWeight: 'bold',
        color: '#000',
    },
    taskListContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        elevation: 3,
        marginBottom: 30,
    },
    taskListTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    addTaskRow: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    taskInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
        backgroundColor: '#fff',
    },
    addButton: {
        backgroundColor: '#3B82F6',
        borderRadius: 8,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    noTasksText: {
        color: '#999',
        fontStyle: 'italic',
    },
    taskItem: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    taskText: {
        fontSize: 16,
        color: '#333',
    },
});
