import { registerRootComponent } from 'expo';

import { AppRegistry } from 'react-native';
import App from './App';
import{name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

// Register background handler
/*messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });*/
  
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
//AppRegistry.registerComponent(appName, () => App);
registerRootComponent(App);
