import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
//import 'firebase/compat/messaging';
import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";
//import { getMessaging } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpTZzZuB_I4bVaWq6przvjGVQupmbftLc",
    authDomain: "fir-auth-5b32a.firebaseapp.com",
    projectId: "fir-auth-5b32a",
    storageBucket: "fir-auth-5b32a.appspot.com",
    messagingSenderId: "1025074298854",
    appId: "1:1025074298854:web:c7a939f1402dfd78d7e027",
    measurementId: "G-EVC0QY4JZS"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Firebase Cloud Messaging and get a reference to the service
//const messaging = getMessaging(app);
export { auth };


