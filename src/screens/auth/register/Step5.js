import React, { useContext } from "react";
import { View, Text, Button, StyleSheet,ScrollView } from "react-native";
// import { FormContext } from "../context/FormContext";
// import { useForm } from "../../context/FormContext";
import { useFormContext } from "../../../context/FormContext";


export default function Step5({ navigation }) {
  const { formData } = useFormContext();

  const handleSubmit = () => {
    console.log("Final Data:", formData);
    alert("Registered Successfully!");
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Step 3</Text>

      <Text>Name: {formData.Name}</Text>
      <Text>Email: {formData.Email}</Text>
      <Text>Phone: {formData.Phone}</Text>

      <Button title="Back" onPress={() => navigation.goBack()} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, marginBottom: 20 },
});
