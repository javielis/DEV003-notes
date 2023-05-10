import styles from "../styles/AllNotes.module.css";
import lapiz from "../../public/img/lapiz.png";
import mas from "../../public/img/mas.png";
import Image from "next/image";
import { format } from "date-fns";
import { app } from "../firebase/fireconfi";
import { useRouter } from "next/router";
import { collection, getDocs, getFirestore, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";

const db = getFirestore(app);

export default function AllNotes({ notes }) {
  const router = useRouter();
  const [editingNote, setEditingNote] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [deletedNote, setDeletedNote] = useState(null);



  const handleEditClick = (note) => {
    setEditingNote(note);
    setEditedTitle(note.title);
    setEditedContent(note.content);
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
    setEditedTitle("");
    setEditedContent("");
  };

  const handleSaveEdit = async () => {
    if (!editingNote) return;

    const { id } = editingNote;
    await updateNote(id, editedTitle, editedContent);


    setDeletedNote({ id, title: editedTitle, content: editedContent });
    setEditingNote(null);
    setEditedTitle("");
    setEditedContent("");
  };

  return (
    <div className={styles.background}>
      <header>
        <Image className={styles.logo} src={lapiz} alt="" />
        <p className={styles.logoTitle}>NOTAS</p>
        <div className={styles.divlogos}>
          <Image
            onClick={() => router.push("/Dashboard")}
            className={styles.plus}
            src={mas}
            alt=""
          />
        </div>
      </header>
      <div className={styles.all}>
        {notes.map((content) => (
          <div className={styles.container} key={content.id}>
            <div className={styles.date}>
              {content.today && format(new Date(content.today), "dd/MM/yyyy hh:mm")}
            </div>
            {editingNote === content ? (
              <div>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                ></textarea>
                <button onClick={handleSaveEdit}>Guardar</button>
                <button onClick={handleCancelEdit}>Cancelar</button>
              </div>
            ) : (
              <div>
                <div className={styles.text}>{content.title}</div>
                <button onClick={() => handleEditClick(content)}>Editar</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const querySnapshot = await getDocs(collection(db, "notes"));
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
  });
  return {
    props: {
      notes: docs,
    },
  };
};

export const updateNote = async (id, title, content) => {
  const noteRef = doc(db, "notes", id);
  const now = new Date();

  };