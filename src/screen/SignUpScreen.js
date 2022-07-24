import { View, ScrollView ,Text,Image,StyleSheet, useWindowDimensions} from 'react-native';
import React, {useLayoutEffect, useState}  from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
 const [username,setUsername] = useState('');
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');
 
 const navigation = useNavigation();

 useLayoutEffect(() =>{
  navigation.setOptions({
    headerBackTitle: "Back to Login",
  });
 }, [navigation]);
 
 const onRegisterPressed =() =>{
  //console.warn('onRegisterPressed');
  createUserWithEmailAndPassword(auth,email,password)
    .then(() =>{
      console.log('User account created');
      navigation.navigate('Sign In');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use'){
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email'){
        console.log('Thar email address is invalid!');
      }
      console.error(error);
    });
 };

 const onFacebookPressed = () =>{
  console.warn('Facebook');
 };
 
 const onGooglePressed =() =>{
  console.warn('Google');
 };

 const onGithubPressed =() =>{
  console.warn('GitHub');
 };

 const onSignInPressed =() =>{
 // console.warn('SignIn');
  navigation.navigate('Sign In');
 };

 const onTermsofUsePressed =() =>{
  console.warn('onTermsofUsePressed');
 };

 const onPrivacyPolicyPressed =() =>{
  console.warn('onPrivacyPolicyPressed');
 };
 //////////////////////////////////////////////////////
  return (
    <ScrollView>    
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      
      <CustomInput 
      placeholder="Username" 
      value={username} 
      setValue={setUsername}/>
      

      
      <CustomInput 
      placeholder="Email" 
      value={email} 
      setValue={setEmail}/>

      <CustomInput
      placeholder="Password"
      value={password}
      setValue={setPassword}
      secureTextEntry={true}/>

      <CustomButton
      text="Register" 
      onPress={onRegisterPressed}
      bgColor="#4765A9"/>

      <Text style={styles.text}>
        By registering, you confirm that you accept our{' '} 
        <Text style={styles.link} onPress={onTermsofUsePressed}>Terms of Use </Text> and{' '} 
        <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text> 
      </Text>

      <CustomButton
      text="Sign In With Facebook" 
      onPress={onFacebookPressed}
      bgColor="#E7EAF4"
      fgColor="#4765A9" />

      <CustomButton
      text="Sign In With Google" 
      onPress={onGooglePressed} 
      bgColor="#FAE9EA"
      fgColor="#DD4D44"/>

      <CustomButton
      text="Sign In With GitHub" 
      onPress={onGithubPressed}
      bgColor="#e3e3e3"
      fgColor="#363636" />

      <CustomButton
      text="Have an account?  Sign in" 
      onPress={onSignInPressed}
      />

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 28,
    fontFamily: 'bold',
    color: 'white',
    margin: 30,
  },
  text:{
    color: 'white',
    marginVertical:10,
  },
  link:{
    color: '#FDB075'

  },
});

export default SignUpScreen;