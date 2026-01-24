import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Step4({ navigation }) {
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [upi, setUpi] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Multi-step Registration</Text>
        <Text style={styles.subtitle}>Step 4 of 5</Text>

        
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>

       
        
        <Text style={styles.label}>Banking Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter bank name"
          value={bankName}
          onChangeText={setBankName}
        />

        <Text style={styles.label}>Account Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter account number"
          keyboardType="numeric"
          value={accountNumber}
          onChangeText={setAccountNumber}
        />

        <Text style={styles.label}>IFSC Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter IFSC code"
          value={ifsc}
          onChangeText={setIfsc}
        />

        <Text style={styles.label}>UPI ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter UPI ID"
          value={upi}
          onChangeText={setUpi}
        />
        
        
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => navigation.navigate("Register5")}
          >
            <Text style={styles.nextText}>Next ›</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF3F9",
    // justifyContent: "center",
    padding: 20,
  },
  card: {
    // backgroundColor: "#fff",
    // borderRadius: 16,
    // padding: 22,
    // elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 4,
    color: "#777",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    marginVertical: 16,
    marginBottom:100,
  },
  progress: {
    width: "80%",
    height: "100%",
    backgroundColor: "#6FAFA4",
    borderRadius: 10,
  },
  label: {
    marginTop: 12,
    fontWeight: "600",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 12,
    marginTop: 6,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 150,
  },
  backBtn: {
    borderWidth: 1,
    borderColor: "#DDD",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  backText: {
    fontWeight: "600",
  },
  nextBtn: {
    backgroundColor: "#4F9C8A",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  nextText: {
    color: "#fff",
    fontWeight: "700",
  },
  
});