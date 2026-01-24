import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { FormProvider } from "./src/context/FormContext";

const App = () => {
  return (
    <SafeAreaProvider>
      <FormProvider>
      <NavigationContainer>
        
        <AppNavigator />
      </NavigationContainer>
      </FormProvider>
    </SafeAreaProvider>
  );
};

export default App;







































// import React from 'react';
// import { View,Text,TextInput,Button,StyleSheet, TouchableOpacity } from 'react-native';



// const App=()=>{
//   return(

//     <View style={styles.appcontainer}>

//     <View style={styles.card}>  
//     <View style={styles.headcontainer}>
//     <Text style={styles.Appname}>In Out</Text>  
//     <Text style={styles.title}>SIGN IN</Text>
//     <Text style={styles.subtitle}>Enter your credentials below</Text>
//     </View>
//     <View style={styles.inputcontainer}>
//     <Text style={styles.label}>Email</Text>
//     <TextInput 
//     placeholder='email'
//     style={styles.pass}
//     />
//     <Text style={styles.label}>Password</Text>
//     <TextInput placeholder='enter your pass' style={styles.pass}/>
//     <Text style={styles.showpass}>ShowPassword</Text>


//     <View style={styles.row}>
//     <Text style={styles.reminder}>Reminder me</Text>
//     <TouchableOpacity>
//       <Text style={styles.forgot}>Forget Password</Text>
//     </TouchableOpacity>
//     </View>
//     <TouchableOpacity style={styles.button}>
//       <Text>Sign In</Text>
//     </TouchableOpacity>
    




//     </View>
//     <View style={styles.footer}>
//       <Text>Don't have an account? </Text>
//       <Text style={styles.register}>Register</Text>
//     </View>

//     </View>
//     </View>

//   );
// };



// const styles=StyleSheet.create({
// appcontainer:{
//   flex:1,
//   // margin:24,
//   // borderWidth:3,
//   alignItems:'center',
//   justifyContent:'center',
//   padding:20,
//   backgroundColor:'#F3F6FA',
//   },
// card:{
//   width:"90%",
//   backgroundColor:'#FFFFFF',
//   borderRadius:20,
//   padding:25,
//   elevation:5,
// },  
// headcontainer:{
// // flex:1,
// padding:50,
// alignItems:'center',
// justifyContent:'center',
// },
// inputcontainer:{
// // flex:2,
// },
// pass:{
//   borderWidth:2,
//   borderRadius:6,
//   marginBottom:10,
//   borderColor:"#DDD"

// },
// Appname:{
//   textAlign:'center',
//   fontSize:20,
//   fontWeight:600,
//   marginBottom:10,
// },
// title:{
//   fontSize:28,
//   fontWeight:"700",
//   textAlign:'center'
// },
// subtitle:{
//   textAlign:"center",
//   color:'#777',
//   marginTop:20,
// },
// label:{
// marginBottom:10,
// fontWeight:"600",
// },
// row:{
//   flexDirection:'row',
//   justifyContent:'space-between',
//   marginTop:10,
//   marginBottom:10
// },
// showpass:{
// color:"#6BAEA5",
// marginTop:5,
// },
// reminder:{
// color:"#555",
// },

// button:{
// backgroundColor:"#6BAEA5",
// padding:15,
// borderRadius:12,
// alignItems:"center"
// },
// footer:{
// marginTop:20,
// flexDirection:'row'
// },
// forgot:{
//   color:"#6BAEA5",
//   fontWeight:"600"
// },
// register:{
//   color:"#6BAEA5"
// },
// });
// export default App;


// import * as React from 'react';
// import { View ,StyleSheet} from 'react-native';
// import { Menu, Button, Provider } from 'react-native-paper';

// export default function App() {
//   const [visible, setVisible] = React.useState(false);

//   return (
//     <Provider >
//       <View style={styles.container}>
//         <Menu
//           visible={visible}
//           onDismiss={() => setVisible(false)}
//           anchor={<Button onPress={() => setVisible(true)}>Show Menu</Button>}
//         >
//           <Menu.Item onPress={() => {}} title="Edit" />
//           <Menu.Item onPress={() => {}} title="Delete" />
//           <Menu.Item onPress={() => {}} title="Logout" />
//         </Menu>
//       </View>
//     </Provider>
//   );
// }

// const styles=StyleSheet.create({
//   container:{
//     backgroundColor:'black',
//     margin:50,
//   },
// });
