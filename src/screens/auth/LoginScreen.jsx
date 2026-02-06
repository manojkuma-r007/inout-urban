import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen({ navigation }) {
  return (

    // <SafeAreaView>   
    <View style={styles.appcontainer}>


      <View style={styles.headcontainer}>
        <Text style={styles.Appname}>In Out</Text>
        <Text style={styles.title}>SIGN IN</Text>
        <Text style={styles.subtitle}>Enter your credentials below</Text>
      </View>
      <View style={styles.inputcontainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder='email'
          style={styles.pass}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput placeholder='enter your pass' style={styles.pass} />
        <Text style={styles.showpass}>ShowPassword</Text>


        <View style={styles.row}>
          <Text style={styles.reminder}>Reminder me</Text>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forget Password</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text>Sign In</Text>
        </TouchableOpacity>





      </View>
      <View style={styles.footer}>
        <Text>Don't have an account? </Text>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.register}>Register</Text>

          </TouchableOpacity>
        </View>
      </View>

    </View>


  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    // marginTop:80,
    // borderWidth:3,
    alignItems: 'center',
    // justifyContent:'center',
    // padding:20,
    backgroundColor: '#F3F6FA',
    padding: 20,
    // marginTop:50,
  },

  headcontainer: {
    marginTop: 50,
    // flex:1,
    paddingTop: 50,
    // alignItems:'center',
    // justifyContent:'center',
  },
  inputcontainer: {
    // flex:2,
  },
  pass: {
    borderWidth: 2,
    borderRadius: 6,
    marginBottom: 10,
    borderColor: "#DDD"

  },
  Appname: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: 'center'
  },
  subtitle: {
    textAlign: "center",
    color: '#777',
    marginTop: 20,
    backgroundColor: '#F3F6FA'
  },
  label: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "600",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },
  showpass: {
    color: "#6BAEA5",
    marginTop: 5,
  },
  reminder: {
    color: "#555",
  },

  button: {
    backgroundColor: "#6BAEA5",
    padding: 15,
    borderRadius: 12,
    alignItems: "center"
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row'
  },
  forgot: {
    color: "#6BAEA5",
    fontWeight: "600"
  },
  register: {
    color: "#6BAEA5"
  },

});