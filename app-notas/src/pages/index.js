import Head from 'next/head'
import Image from 'next/image'
import fondo from '../../public/img/fondo.jpg'
import google from '../../public/img/google.png'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })


export default function login() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // implementa el código para el inicio de sesión aquí
  };

  const google = (event) => {
    event.preventDefault();
    // implementa el código para el inicio de sesión con Google aquí
  };

  return (
    
    <div className={styles.container}>
      <header className={styles.header}>
        <Image className={styles.img} alt="" />
       NOTAS
      </header>
      <div className={styles.content}>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="user">
            Email:{" "}
          </label>
          <input
            className={styles.input}
            type="text"
            id="first"
            name="user"
            placeholder="............."
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className={styles.label} htmlFor="Password">
            Password:{" "}
          </label>
          <input
            className={styles.input}
            type="password"
            id="last"
            name="password"
            placeholder="............."
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            onClick={handleLogin}
            type="submit"
            className={styles.btnLogin}
          >
            Login
          </button>
        </form>
        <div className={styles.containerGoogle}>
          <button type="button" className={styles.btnGoogle} onClick={google}>
            {" "}
            <img
              className={styles.logoGoogle}
              src="google"
              alt=""
            ></img>{" "}
            Sign in with Google
          </button>
        </div>
        <a className={styles.ahref} href="/Register">
          Registrate aquí
        </a>
      </div>
    </div>
  );
}




//   const router = useRouter()
//   const [password, setPassword] = useState('')
//   const [email, setEmail] = useState('')

//   const handleLogin = (event) => {
//     event.preventDefault()
    
//     //funcion sign in 
//     signIn(email, password).then(() => {
//       router.push('/Dashboard')
//       alert('Bienvenidos')
//       // si estan correctos debe llevarme a Dashboard;
//     }).catch((error) => {
//       const errorCode = error.code;
//   })

//   }

//   const google = (event) => {
//     event.preventDefault()
//     registerGoogle().then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const user = result.user;
//       console.log(user);
//       // IdP data available using getAdditionalUserInfo(result)
//       router.push('/Dashboard');
//     }).catch((error) => {
//       console.log(error);
//     })
//     }

//   return (
//     <>
//        <Image alt='fondo login'
//         src={fondo}
//         width={700}
//         height={500}
//         sizes='100vw'
//         style={{
//            zIndex: -1,
//            position: 'fixed',
//            width: '100%',
//            height: '100vh',
//         }}></Image>
//  <       div style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignContent: 'center',
//           width: '100%',
//           height: '100vh'
//         }}>
       

// <div>
//       <header className={styles.header}>
//         <Image className={styles.img} alt="" />
//         Lab Notes
//       </header>
//       <div className={styles.div}>
//         <form className={styles.form}>
//           <label className={styles.label} htmlFor="user">Email: </label>
//           <input 
//             className={styles.input} 
//             type="text" 
//             id="first" 
//             name="user" 
//             placeholder="............." 
//             onChange={(e) => setEmail(e.target.value)}
//             required />

//           <label className={styles.label} htmlFor="Password">Password: </label>
//           <input 
//             className={styles.input} 
//             type="password" 
//             id="last" 
//             name="password" 
//             placeholder="............." 
//             onChange={(e) => setPassword(e.target.value)}
//             required 
//           />

//           <button onClick={handleLogin} type="submit" className={styles.btnLogin} >Login</button>
//         </form>
//         <div className={styles.containerGoogle}>
//         <button onClick={google} type="button" className={styles.btnGoogle}> <img className={styles.logoGoogle} src="google" alt=""></img> Sign in with Google</button>
//         </div>
//         <a className={styles.ahref} href="/Register">Registrate aquí</a>
        
//       </div>
//     </div>
    
     
//     </div>  
   
//     </>
//   )
//     }
