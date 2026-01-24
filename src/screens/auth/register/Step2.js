import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
// import {FormContext} from '../context/FormContext';
import { useFormContext } from "../../../context/FormContext";

// import { ScrollView } from "react-native/types_generated/index";

export default function Step2({ navigation }) {

  const {formData,setFormData}=useFormContext();
  // const [position, setPosition] = useState("");
  // const [company, setCompany] = useState("");
  // const [salary, setSalary] = useState("");
  // const [department, setDepartment] = useState("");
  // const [qualification, setQualification] = useState("");
  // const [joiningDate, setJoiningDate] = useState("");
  // const [roles, setRoles] = useState("");
  // const [skills, setSkills] = useState("");

  return (
    <ScrollView>
    <View style={styles.container}>
      
        <Text style={styles.title}>Multi-step Registration</Text>
        <Text style={styles.subtitle}>Step 2 of 5</Text>

        {/* Progress */}
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>

        <TextInput placeholder="Positin"
          value={formData.Position}
          onChangeText={(taxt)=>setFormData({...formData,Position:taxt})}
        />

        <View style={styles.pickerBox}>
          <Picker selectedValue={formData.Company} onValueChange={(text)=>setFormData({...formData,Company:text})}>
            <Picker.Item label="Select Company" value="" />
            <Picker.Item label="Google" value="google" />
            <Picker.Item label="Amazon" value="amazon" />
            <Picker.Item label="Microsoft" value="microsoft" />
          </Picker>
        </View>

        <TextInput
          placeholder="Salary (optional)"
          style={styles.input}
          keyboardType="numeric"
          value={formData.Salary}
          onChangeText={(text)=>setFormData({...formData,Salary:text})}
        />

        <TextInput
          placeholder="Department"
          style={styles.input}
          value={formData.Department}
          onChangeText={(text)=>setFormData({...formData,Department:text})}
        />

        <TextInput
          placeholder="Qualification"
          style={styles.input}
          value={formData.Qualification}
          onChangeText={(text)=>setFormData({...formData,Qualification:text})}
        />

        <TextInput
          placeholder="Date of Joining"
          style={styles.input}
          value={formData.DateofJoining}
          onChangeText={(text)=>setFormData({...formData,DateofJoining:text})}

        />

        <TextInput
          placeholder="Roles & Responsibilities"
          style={styles.input}
          value={formData.Roles}
          onChangeText={(text)=>setFormData({...formData,Roles:text})}
        />

        <TextInput
          placeholder="Skills"
          style={styles.input}
          value={formData.Skills}
          onChangeText={(text)=>setFormData({...formData, Skills: text})}
        />
        <View style={styles.btncolumn}>
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => navigation.navigate("Register3")}
          >
            <Text style={styles.nextText}>Next ›</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2F6",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    // backgroundColor: "#fff",
    // borderRadius: 15,
    // padding: 20,
    // elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  subtitle: {
    color: "#888",
    marginVertical: 6,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginVertical: 15,
  },
  progress: {
    width: "40%",
    height: "100%",
    backgroundColor: "#5aa79a",
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginTop: 12,
  },
  pickerBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginTop: 12,
    overflow: "hidden",
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 110,
  },
  backBtn: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  backText: {
    color: "#333",
  },
  nextBtn: {
    backgroundColor: "#5aa79a",
    padding: 12,
    borderRadius: 10,
    paddingHorizontal: 25,
  },
  nextText: {
    color: "#fff",
    fontWeight: "600",
  },
  btncolumn:{
    // flexDirection:'column',
    // justifyContent:'flex-end',
  },
});