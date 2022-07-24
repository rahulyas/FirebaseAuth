import { View, ScrollView ,Text,Image,StyleSheet, useWindowDimensions} from 'react-native';
import React, {useEffect, useState}  from 'react';
import Logo from '../../assets/images/b.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
const SignInScreen = () => {
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');
 const {height} = useWindowDimensions();

 const navigation = useNavigation();

 useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(user =>{
      console.log('Sign in')
      if (user) {
        //console.warn('Sign in')
        navigation.navigate("Home")
      }
    }) 
    return unsubscribe
  }, []); 

   const onSignInPressed =() =>{
  //console.warn('Sign in'); 
  signInWithEmailAndPassword(auth, email, password)
  .then(userCredentials =>{
    const user = userCredentials.user;
    console.log('Logged in with:',navigation.navigate("Home"));
  })
  .catch((error) => alert(error));
  //navigation.navigate("Home");
 };

 const onForgotPasswordPressed = () =>{
  console.warn('onForgotPasswordPressed');
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

 const onSignUpPressed =() =>{
  console.warn('SignUp');
  // for user Register
  navigation.navigate('Sign Up');
 };
  return (
    <ScrollView>    
    <View style={styles.root}>
      <Image source={Logo} 
      style={[styles.logo, {height: height * 0.3}]} 
      resizeMode="contain" />
      
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
      text="Sign In" onPress={onSignInPressed}
      bgColor="#4765A9"/>

      <CustomButton
      text="Forgot password?" 
      onPress={onForgotPasswordPressed} 
      />

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
      text="Don't have an account?  Create one" 
      onPress={onSignUpPressed}
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
  logo: {
    width: 100,
    maxWidth: 300,
    maxheight: 200,
  },
});

export default SignInScreen;