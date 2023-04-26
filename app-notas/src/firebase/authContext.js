// import React, { createContext, useState, useEffect } from "react";
// import { auth  } from "./fireconfi";


// const authContext = createContext();



// export const authProvider = (props) => {

//     const [currentUser, setCurrentUser] = useState({});

//     useEffect(() => {
//      auth.onAuthStateChanged((user) => {
//         setCurrentUser(user);
//         })

//     }, [])


//     const signUp = (email, password) => { 
//         return auth.createUserWithEmailAndPassword(email, password)
//     }
//     const login = (email, password) => {
//         return auth.signInWithEmailAndPassword(email, password)
//      }
//     const logOut = () => auth.logOut();
//     const value = { signUp, login, logOut, curreUser };
//     return(
//         <authContext.Provider value={value} >
//             {props.children}
//         </authContext.Provider>
//     )
// }













// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut 
// } from 'firebase/auth';
// import { app } from "./firebaseconfig";

// const auth = getAuth(app);

// export const signUp = (email, password) => { 
// return createUserWithEmailAndPassword(auth, email, password)}

// export const signIn = (email, password) => {
//  return signInWithEmailAndPassword(auth, email, password) }


// export const status = (state) => {
//   return onAuthStateChanged(auth, state);
// }


// export const logOut = () =>{
//   return signOut(auth)    
// }

// export function registerGoogle() {
//   const provider = new GoogleAuthProvider();
//   return signInWithPopup(auth, provider);
// }
// export { GoogleAuthProvider };


























// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
 



// import React, { difeEstados } from "react";
// import { auth, google } from "../faribaseConfi";


// function App() {
//     const [usuario, setUsuario ] = difeEstados(null)
//     const [ foto, setFoto ] = difeEstados(null)
//     const [name, setnombre ] = difeEstados(null)
//     const loginGoogle = () => {
//         auth.signInwithpopup(google)
//         .then(respuesta => {
//             console.log(respuesta.usuario)
//             setUsuario(respuesta.usuario)
//             setFoto(respuesta,usuario,fotoURL)
//             setnombre(respuesta.usuario.name)
//         }).catch(err => {
//             console.log(err)
//         })
//     }

//     return (            
//         <div>
//             <h1>login con google</h1>
//             <button onClick={loginGoogle}>login con google</button><br />
       
//        {
//         foto?
//         (
//             <div>
//                <img height="150" src={foto} alt="foto usuario"  />
//                <p>(nombre)</p>
//             </div>
//         ) :
//        }
//        (
//         <span></span>
//        )
//         </div>
//     );
// }
// export default App;