// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqoazaCcluSwiJiX25otq_DdiAFk3srF4",
  authDomain: "fa-shoppy.firebaseapp.com",
  projectId: "fa-shoppy",
  storageBucket: "fa-shoppy.appspot.com",
  messagingSenderId: "588186223892",
  appId: "1:588186223892:web:7ad37a003feab5ca2c6e01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;