/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Login.module.css'
// import handleBotonClick from './RegistroCorreo'
// import GoogleAuthProvider from '../firebase/auth'
import { registerGoogle } from '../firebase/auth'
import { useState } from "react"
import { useRouter } from 'next/router'
import { signIn } from "../firebase/auth"
// import AuthCorreo from '../firebase/funcionesFire'
const inter = Inter({ subsets: ['latin'] })



export default function Login() {


  const router = useRouter()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleLogin= (event) => {
    event.preventDefault();
    signIn(email, password).then(() => {
      router.push('/Dashboard')
      alert('Bienvenidos')
      // si estan correctos debe llevarme a Dashboard;
    }).catch((error) => {
      const errorCode = error.code;
  }) // implementa el código para el inicio de sesión aquí
  };
  const google = (event) => {
    event.preventDefault();
    registerGoogle().then((result) => {
    // "Esto te proporciona un token de acceso de Google. Puedes usarlo para acceder a la API de Google."
      const user = result.user;
      console.log(user);
      router.push('/Dashboard');
      alert('Bienvenidos');
    }).catch((error) => {
      console.log(error);
    })
  
  };

  return (
    
    <>
  

   <Image alt='Fondo' 
    src='/img/fondo2.jpg'
    width={750}
    height={480}
    sizes='100vw'
    style={{
      zIndex: -1,
      position: 'fixed',
      width: '100%',
      height: '100vh',
      
    }}></Image>
    <div className={styles.container}>
      <header className={styles.header} style={{
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center'
        
        }}>
        <Image className={styles.img} alt="" />
      <h1 className={styles.notas}> NOTAS </h1> 
      </header>
     
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100vh'
      
      
     
    }}>
       
        <div className='Contenedor'>
          <label className={styles.correo} htmlFor="user"> Email:{" "}</label>
          <input
            className={styles.inputcorreo} type="text" id="first" name="user" placeholder="**********"
            onChange={(e) => setEmail(e.target.value)}required
          />

          <label className={styles.contraseña} htmlFor="Password"> Password:{" "} </label>
          <input className={styles.inputcontraseña}type="password" id="last" name="password"placeholder="********"
            onChange={(e) => setPassword(e.target.value)}required
          />

           <button onClick={handleLogin} type="submit" className={styles.btnLogin} >Ingresar</button>
           
         </div>
         <div className={styles.containerGoogle}>
          <button  onClick={google} type="button" className={styles.btnGoogle}><img className={styles.ahref} href="/registro" src="google" alt="" >
            </img></button>
         
         </div>
         <button className={styles.ahref}  href="/registro"> Registrate </button>
        </div>
         

         
         </div> 
         
      

  
    </>
  );
}