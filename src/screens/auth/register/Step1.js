import React,{useState} from "react";
import { View, Text, TextInput,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import { useFormContext } from "../../../context/FormContext";


export default function Step1({ navigation }) {
      const {formData,setFormData}=useFormContext();
  
      const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView>
    <View style={styles.container}>
      
        <Text style={styles.title}>Multi-step Registration</Text>
        <Text style={styles.subtitle}>Step 1 of 5</Text>

        
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.label}>Name</Text>
        <TextInput
        placeholder="Name"
        value={formData.Name}
        onChangeText={(text) => setFormData({ ...formData, Name: text })}
        style={styles.input}
      />

        <Text style={styles.label}>Email</Text>
        <TextInput
        placeholder="Email"
        value={formData.Email}
        onChangeText={(text) => setFormData({ ...formData, Email: text })}
        style={styles.input}
      />

        
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordBox}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={!showPassword}
            placeholder="Password"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.showText}>
              {showPassword ? "Hide" : "Show"}
            </Text>
          </TouchableOpacity>
        </View>

        <Input label="Confirm Password" placeholder="Confirm password" secure />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput 
        placeholder="Phone number"
        value={formData.Phone}
        onChangeText={(taxt) => setFormData({...formData, Phone: taxt})}
        style={styles.input}
        />

        <Text style={styles.label}>BloodGroup</Text>
        <TextInput
        placeholder="Blood Group"
        value={formData.BloodGroup}
        onChangeText={(text) => setFormData({ ...formData, BloodGroup: text })}
        style={styles.input}
      />

      <Text style={styles.label}>Address</Text>
        <TextInput
        placeholder="Address"
        value={formData.Address}
        onChangeText={(text) => setFormData({ ...formData, Address: text })}
        style={styles.input}
      />

        
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.nextBtn} onPress={()=>navigation.navigate('Register2')}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
         
        </View>
      </View>
      </ScrollView>
    
  );
  
}


const Input = ({ label, placeholder, secure }) => (
  <>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secure}
    />
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2F6",
    justifyContent: "center",
    // alignItems:'center',
    padding: 20,
  },
 
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F2937",
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
    marginVertical:15,
  },
  progress: {
    width: "20%",
    height: "100%",
    backgroundColor: "#6FB1A8",
    borderRadius: 10,
  },
  label: {
    fontSize: 14,
    color: "#374151",
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    padding: 12,
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
  buttonRow: {
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