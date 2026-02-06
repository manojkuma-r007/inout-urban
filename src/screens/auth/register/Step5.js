import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
// import { FormContext } from "../context/FormContext";
// import { useForm } from "../../context/FormContext";
import { useFormContext } from "../../../context/FormContext";


export default function Step5({ navigation }) {
  const { formData } = useFormContext();

  const handleSubmit = () => {
    console.log("Final Data:", formData);
    // alert("Registered Successfully!");
    navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Step 3</Text>
        <Text style={styles.subtitle}>Step 5 of 5</Text>

        <View style={styles.progressBar}>
          <View style={styles.progress}></View>
        </View>

        <View style={styles.input}>
          <Text>Name:</Text>
          <Text style={styles.label}>{formData.Name}</Text>
        </View>

        <View style={styles.input}>
          <Text>Email</Text>
          <Text style={styles.label}>{formData.Email}</Text>
        </View>

        <View style={styles.input}>
          <Text>Phone</Text>
          <Text style={styles.label}>{formData.Phone}</Text>
        </View>

        <View style={styles.input}>
          <Text>Blood Group:</Text>
          <Text style={styles.label}>{formData.BloodGroup}</Text>
        </View>

        <View style={styles.input}>
          <Text>Address</Text>
          <Text style={styles.label}>{formData.Address}</Text>
        </View>

        <View style={styles.input}>
          <Text>Position</Text>
          <Text style={styles.label}>{formData.Position}</Text>
        </View>

        <View style={styles.input}>
          <Text>Company</Text>
          <Text style={styles.label}>{formData.Company}</Text>
        </View>

        <View style={styles.input}>
          <Text>Salary</Text>
          <Text style={styles.label}>{formData.Salary}</Text>
        </View>

        <View style={styles.input}>
          <Text>Department</Text>
          <Text style={styles.label}>{formData.Department}</Text>
        </View>

        <View style={styles.input}>
          <Text>Qualification</Text>
          <Text style={styles.label}>{formData.Qualification}</Text>
        </View>

        <View style={styles.input}>
          <Text>Data of Joining</Text>
          <Text style={styles.label}>{formData.DateofJoining}</Text>
        </View>

        <View style={styles.input}>
          <Text>Roles</Text>
          <Text style={styles.label}>{formData.Roles}</Text>
        </View>

        <View style={styles.input}>
          <Text>Skills</Text>
          <Text style={styles.label}>{formData.Skills}</Text>
        </View>

        <View style={styles.btnRow}>
          {/* <View style={styles.btnRow}> */}

          {/* <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Submit" onPress={handleSubmit} /> */}
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextBtn}
            onPress={handleSubmit}
          >
            <Text style={styles.nextText}>Summit </Text>
          </TouchableOpacity>

          {/* </View> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2F6",
    justifyContent: "center",
    // alignItems:'center',
    padding: 20,
    // marginTop:50,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F2937",
    marginTop: 50,
  },
  subtitle: {
    color: "#6B7280",
    marginBottom: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 10,
    // marginBottom: 20,
    marginVertical: 15,
  },
  progress: {
    width: "100%",
    height: "100%",
    backgroundColor: "#6FB1A8",
    borderRadius: 10,
  },
  label: {
    fontSize: 20,
    color: "#2b2b2c",
    fontWeight: "600",
    // marginTop: 12,
    // marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#6B7280",
    borderRadius: 10,
    padding: 12,
    marginTop: 12,
    marginBottom: 6,

  },
  passwordBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },
  showText: {
    color: "#6FB1A8",
    fontWeight: "600",
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  backBtn: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  backText: {
    color: "#6B7280",
  },
  nextBtn: {
    backgroundColor: "#6FB1A8",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  nextText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
