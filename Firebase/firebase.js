// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLOEaD1F6stSM1GTAhzD1_bRixQU7SAYE",
  authDomain: "martial-mastery.firebaseapp.com",
  projectId: "martial-mastery",
  storageBucket: "martial-mastery.appspot.com",
  messagingSenderId: "242843071484",
  appId: "1:242843071484:web:f49fbae28a564485233879"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app