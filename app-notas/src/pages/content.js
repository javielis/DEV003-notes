
import styles from "../../styles/content.module.css"
import Image from "next/image"
import lapiz from "../../../public/img/lapiz.png"
import editar from "../../../public/img/editar.png"
import eliminar from "../../../public/img/eliminar.png"
import actualizar from "../../../public/img/actualizar.png"
import regresar from "../../../public/img/regresar.png"
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { app } from '../firebase/fireconfi'
import { deleteNote } from "../firebase/fireStore"
const db = getFirestore(app)

export default function NotesReview({ notes }) {

    const { query } = useRouter()
    const router = useRouter()
    const [note, setNote] = useState(notes || {})
    // const [note, setNote] = useState(notes)
    const [editing, setEditing] = useState(false);


    const deleteNotes = async (content) => {
      await deleteNote(content);
    };
      // ...
      
      const updateNote = async (e) => {
        e.preventDefault();
        // const { content } = query;
        const docRef = doc(db, 'notes', content);
        try {
          await updateDoc(docRef, note);
          console.log('Nota actualizada con éxito');
          await router.push(`/notes/${content}`);
          setEditing(false);
        } catch (error) {
          console.error('Error al actualizar la nota:', error);
        }
      };

    return (
        <div className={styles.background}>
            <header>
                <Image className={styles.logo} src={lapiz} alt="" />
                <p className={styles.logoTitle}>NOTAS</p>
                <div className={styles.divlogos}>
                    <Image onClick={() => router.push('/AddTodo')} className={styles.back} src={regresar} alt="" />
                </div>
            </header>
            <div className={styles.container}>
                <div className={styles.content}>

                    <input className={styles.title} type="text" value={note.title} onChange={e => editNote('title', e.target.value)} />

                    <textarea className={styles.description} value={note.description} onChange={e => editNote('description', e.target.value)}></textarea>

                </div>
                {editing ? (
                    <div className={styles.contentImg}>
                       <Image className={styles.img} onClick={() => deleteNotes(query.content)} src={eliminar} alt="" />
                       <Image className={styles.img} onClick={(e) => updateNote(e, query.content)} src={actualizar} alt="" />

                        <Image onClick={() => setEditing(false)} alt="" src={editar} />
                    </div>
                ) : (
                    <div className={styles.contentImg}>
                        <Image className={styles.img} onClick={deleteNotes} src={eliminar} alt="" />
                        <Image className={styles.img} onClick={() => setEditing(true)} src={editar} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export async function getServerSideProps({ query: { content } }) {
    const docRef = doc(db, 'notes', content)
    const docSnap = await getDoc(docRef)
    const notes = docSnap.data()

    return {
        props: {
            notes: notes
        }
    }
}