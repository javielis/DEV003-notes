/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Dashboard.module.css"
import Image  from 'next/image'
import cerrarSesion from "../../public/img/cerrarSesion.png"
import history from "../../public/img/history.png"
import lapiz from "../../public/img/lapiz.png"
import { useState } from "react"
import { getFirestore } from "../firebase/fireStore"
import { addANewPost } from '../firebase/fireStore';
import { useRouter } from "next/router"
import { logOut } from "../firebase/auth"



// const db = getFirestore(firebaseApp);

export default function Dashboard() {

  const router = useRouter();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  //esta funcion es para guardar la info en firebase
  const sendInfo = (e) => {
    e.preventDefault();
    //console.log(dato);
    addANewPost(title, description);
    Form.reset();
  }
  const sendInfoTwo = (e) => {
    e.preventDefault();

    addANewPost(title, description);
    FormTwo.reset();
  }


  const handleSignOut = () => {
    logOut().then(() => {
      router.push('/Index')
    });
  }
  return (
    <div className={styles.background}>
      <header>
        <Image className={styles.lapiz} src={lapiz} alt="" />
        <p className={styles.titulo}>NOTAS</p>
        <div className={styles.divlogos}>
        <Image onClick={handleSignOut} className={styles.cerrarSesion} src={cerrarSesion} alt=""/>
        <Image onClick={()=>router.push('/AddTodo')} className={styles.history} src={history} alt=""/>
        </div>
      </header>
    
      <div className={styles.container}>
          <div className={styles.divnota}>
            <form onSubmit={sendInfo} name='Form'>
              <div>
                <input
                  type="text"
                  placeholder='Title'
                  name='Title'
                  className={styles.tituloNota}
                  onChange={(e) => setTitle(e.target.value)}
                  required />
              </div>

              <div>
                <textarea
                  type="text"
                  placeholder='Description'
                  name='Description'
                  className={styles.descripcionNota}
                  onChange={(e) => setDescription(e.target.value)}
                  required />
                  <img className={styles.dibujo} src="/img/dibujo.png" alt=""></img>
              </div>
              <button className={styles.guardar}>Guardar</button>
            </form>
          </div>
          </div>
        </div>
    
  )
}