import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/auth/LoginScreen';

import Step1 from '../screens/auth/register/Step1';
import Step2 from '../screens/auth/register/Step2';
import Step3 from '../screens/auth/register/Step3';
import Step4 from '../screens/auth/register/Step4';
import Step5 from '../screens/auth/register/Step5';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Step1} />
        <Stack.Screen name="Register2" component={Step2}/>
        <Stack.Screen name="Register3" component={Step3}/>
        <Stack.Screen name="Register4" component={Step4}/>
        <Stack.Screen name="Register5" component={Step5}/>
      </Stack.Navigator>
    
  );
}