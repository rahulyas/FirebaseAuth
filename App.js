import registerNNPushToken from 'native-notify';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import {requestUserPermission,NotificationListner} from './src/utils/pushnotificaton_helper';

export default function App() {
  registerNNPushToken(3131,'3oikGGmcJs8L2vDAqbds0D');

  useEffect(()=>{
  //  requestUserPermission();
   // NotificationListner();
  },[]);

  return (
    <View style={styles.container}>
      <Navigation />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
