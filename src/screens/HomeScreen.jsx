import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Dimensions
} from 'react-native';
import { useFormContext } from "../context/FormContext";

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
    const { formData } = useFormContext();
    // Mock data for the date picker
    const dates = [
        { day: '02', weekday: 'Mon', active: false },
        { day: '03', weekday: 'Tue', active: false },
        { day: '04', weekday: 'Wed', active: false },
        { day: '05', weekday: 'Thu', active: false },
        { day: '06', weekday: 'Fri', active: true },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F5F7FA" />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Profile Card */}
                <View style={styles.profileCard}>
                    <View style={styles.profileHeader}>
                        <View style={styles.avatarContainer}>
                            {/* Placeholder for the logo/avatar in the image */}
                            <View style={styles.avatarPlaceholder}>
                                <Text style={styles.avatarText}>UC</Text>
                            </View>
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.userName}>{formData.Name}</Text>
                            <Text style={styles.userRole}>{formData.Position}</Text>
                            <Text style={styles.companyName}>{formData.Company}</Text>
                        </View>
                    </View>
                </View>

                {/* Stats Row */}
                <View style={styles.statsRow}>
                    <Text style={styles.statItem}><Text style={styles.greenCheck}>✅ </Text>Present: <Text style={styles.statValueGreen}>0</Text></Text>
                    <Text style={styles.statItem}><Text style={styles.redX}>❌ </Text>Leaves: <Text style={styles.statValueRed}>6</Text></Text>
                    <Text style={styles.statItem}><Text style={styles.calIcon}>📅 </Text>Partial: <Text style={styles.statValueOrange}>0</Text></Text>
                    <Text style={styles.statItem}><Text style={styles.calIcon}>📅 </Text>Total: <Text style={styles.statValueBlue}>0</Text></Text>
                </View>

                {/* Action Buttons */}
                <View style={styles.actionsContainer}>
                    <TouchableOpacity
                        style={[styles.actionButton, styles.btnYellow]}
                        onPress={() => navigation.navigate('ApplyLeave')}
                    >
                        <Text style={styles.btnText}>📝 Apply Leave</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.actionButton, styles.btnGreen]}
                        onPress={() => navigation.navigate('TaskManager')}
                    >
                        <Text style={styles.btnText}>📂 Task Manager</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.actionButton, styles.btnBlue]}
                        onPress={() => navigation.navigate('Attendance')}
                    >
                        <Text style={styles.btnText}>📅 Open Calendar View</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.actionButton, styles.btnRed]}
                        onPress={() => navigation.navigate('Auth')}
                    >
                        <Text style={styles.btnText}>🔒 Logout</Text>
                    </TouchableOpacity>
                </View>

                {/* Today Attendance Section */}
                <Text style={styles.sectionTitle}>Today Attendance</Text>

                <View style={styles.attendanceContent}>
                    <Text style={styles.noActivityText}>No activity on selected date</Text>
                </View>

                {/* Date Selector */}
                <View style={styles.dateContainer}>
                    {dates.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.dateBox, item.active && styles.activeDateBox]}
                        >
                            <Text style={[styles.dateDay, item.active && styles.activeDateText]}>{item.day}</Text>
                            <Text style={[styles.dateWeekday, item.active && styles.activeDateText]}>{item.weekday}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Check In Button */}
                <View style={styles.checkInContainer}>
                    <TouchableOpacity style={styles.checkInButton}>
                        <Text style={styles.checkInText}>Check In</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 30 }} />

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#F5F9FF', // Light gradient-like background
    },
    scrollContent: {
        padding: 20,
    },
    profileCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarContainer: {
        marginRight: 15,
    },
    avatarPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30, // Circle
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#4CAF50', // Green border shown in image
    },
    avatarText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileInfo: {
        justifyContent: 'center',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    userRole: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    companyName: {
        fontSize: 13,
        color: '#999',
        marginTop: 2,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        flexWrap: 'wrap',
    },
    statItem: {
        fontSize: 12,
        fontWeight: '500',
        color: '#333',
        marginRight: 5,
    },
    greenCheck: { color: 'green' },
    redX: { color: 'red' },
    calIcon: { fontSize: 12 },
    statValueGreen: { color: 'green', fontWeight: 'bold' },
    statValueRed: { color: 'red', fontWeight: 'bold' },
    statValueOrange: { color: 'orange', fontWeight: 'bold' },
    statValueBlue: { color: 'blue', fontWeight: 'bold' },

    actionsContainer: {
        marginBottom: 25,
    },
    actionButton: {
        width: '100%',
        paddingVertical: 14,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    btnYellow: { backgroundColor: '#F1C40F' }, // Apply Leave
    btnGreen: { backgroundColor: '#27AE60' }, // Task Manager
    btnBlue: { backgroundColor: '#2980B9' }, // Calendar View
    btnRed: { backgroundColor: '#E74C3C' }, // Logout

    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },

    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    attendanceContent: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        minHeight: 50,
    },
    noActivityText: {
        color: '#aaa',
        fontSize: 14,
    },

    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    dateBox: {
        width: width / 6,
        aspectRatio: 0.8,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 1,
    },
    activeDateBox: {
        borderColor: '#3B82F6',
        backgroundColor: '#EBF5FF', // Light blue tint
        borderWidth: 1.5,
    },
    dateDay: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    dateWeekday: {
        fontSize: 12,
        color: '#666',
    },
    activeDateText: {
        color: '#3B82F6',
    },

    checkInContainer: {
        alignItems: 'center',
    },
    checkInButton: {
        backgroundColor: '#3B82F6',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30, // Rounded pill shape
        elevation: 5,
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        width: '50%',
        alignItems: 'center',
    },
    checkInText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
