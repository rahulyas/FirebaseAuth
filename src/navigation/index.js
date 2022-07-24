import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screen/SignUpScreen';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown:false}}>
         <Stack.Screen name="Sign In" component={SignInScreen}/>
         <Stack.Screen name="Sign Up" component={SignUpScreen}/>
         <Stack.Screen name="Home" component={Home}/>           
       </Stack.Navigator>
    </NavigationContainer>
  );
};   
export default Navigation;