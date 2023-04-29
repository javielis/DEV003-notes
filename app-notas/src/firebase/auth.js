// import { app } from './fireconfi';
import { auth } from './fireconfi';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {createUserWithEmailAndPassword} from "firebase/auth";

export const signUp = (email, password) => { 
return createUserWithEmailAndPassword(auth, email, password)}

export const signIn = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password) }


export const status = (state) => {
    return onAuthStateChanged(auth, state);
  }
  

export const logOut = () =>{
    return signOut(auth)    
}

export function registerGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  export { GoogleAuthProvider };