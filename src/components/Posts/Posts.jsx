import React from "react";
import styles from "./Posts.module.css";

function Posts({ index, Info, deletePost }) {
  const deletePostDel = () => {
    deletePost(index);
  };
  return (
    <div className={styles.fontCard}>
      <div className={styles.card}>
        <div className={styles.photoContainer}>
          <img src={Info.postPhoto[index]} alt="Maldives" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{Info.postName[index]}</h1>
          <h2 className={styles.subtitle}>{Info.post[index]}</h2>
        </div>
        <button onClick={deletePostDel}>Видалити</button>
      </div>
    </div>
  );
}

export default Posts;
