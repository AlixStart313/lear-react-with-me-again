import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native'

const firebaseConfig = {
  apiKey: "AIzaSyBnbk2mweT3wfLM3vgCcC7e00xugnod8WE",
  authDomain: "dsm5-ba838.firebaseapp.com",
  projectId: "dsm5-ba838",
  storageBucket: "dsm5-ba838.appspot.com",
  messagingSenderId: "814534830124",
  appId: "1:814534830124:web:0ae0c96e186c701c414989"
};

// Initialize Firebase
//expo community no es compatible 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)})