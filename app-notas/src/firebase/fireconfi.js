// Import the functions you need from the SDKs you need
// import { GoogleAuthProvider } from 'firebase/auth';

import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// import firebase from 'firebase/app';
// import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA4HDmg9Ep_WDj8vHMpKbGlIUJaogW7hUM",
  authDomain: "appnotas-abbc8.firebaseapp.com",
  projectId: "appnotas-abbc8",
  storageBucket: "appnotas-abbc8.appspot.com",
  messagingSenderId: "832490884999",
  appId: "1:832490884999:web:f99a6ad1f5d57ad2444d22"
};


// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//y lo exporto con auth
export const auth = getAuth(app);