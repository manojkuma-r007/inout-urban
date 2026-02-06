import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    StatusBar
} from 'react-native';
import { Picker } from "@react-native-picker/picker";

export default function ApplyLeaveScreen({ navigation }) {
    const [leaveType, setLeaveType] = useState('Casual');
    const [reason, setReason] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#F5F9FF" />
            <ScrollView contentContainerStyle={styles.scrollContent}>

                <Text style={styles.title}>Apply for Leave</Text>

                <View style={styles.card}>
                    <Text style={styles.label}>From Date</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Select From Date"
                        value={fromDate}
                        onChangeText={setFromDate}
                    />

                    <Text style={styles.label}>To Date</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Select To Date"
                        value={toDate}
                        onChangeText={setToDate}
                    />

                    <Text style={styles.label}>Leave Type</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={leaveType}
                            onValueChange={(itemValue) => setLeaveType(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Casual" value="Casual" />
                            <Picker.Item label="Sick" value="Sick" />
                            <Picker.Item label="Earned" value="Earned" />
                        </Picker>
                    </View>

                    <Text style={styles.label}>Reason</Text>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        placeholder="Brief reason for leave..."
                        multiline={true}
                        numberOfLines={4}
                        value={reason}
                        onChangeText={setReason}
                        textAlignVertical="top"
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.backButtonText}>Back</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => console.log('Leave Applied')}
                        >
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F9FF',
    },
    scrollContent: {
        padding: 20,
        justifyContent: 'center',
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3B3B98', // Dark blueish
        textAlign: 'center',
        marginBottom: 30,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    label: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        color: '#333',
    },
    pickerContainer: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        marginBottom: 20,
        overflow: 'hidden',
    },
    picker: {
        height: 50,
        width: '100%',
    },
    textArea: {
        height: 120,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    backButton: {
        backgroundColor: '#E0E0E0',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        flex: 0.45,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#555',
        fontWeight: 'bold',
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: '#4E37D3', // Purple-blue
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        flex: 0.45,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
