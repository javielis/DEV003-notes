// import { app } from './fireconfi';
import { auth } from './fireconfi';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { getAuth } from 'firebase/auth';
// import {getAuth} from "../firebase/auth.js"

import { app } from "../firebase/auth.js";

const Auth = getAuth(app);

export const signUp = (email, password) => { 
return createUserWithEmailAndPassword(auth, email, password)}

export const signIn = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password) }


export const status = (state) => {
    return onAuthStateChanged(auth, state);
  }
  

export const logOut = async () =>{
  try {
    await signOut(auth); 
  } catch (error) {
    console.log("Error al cerrar sesión", error);
  }
}


export function registerGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  export { GoogleAuthProvider };