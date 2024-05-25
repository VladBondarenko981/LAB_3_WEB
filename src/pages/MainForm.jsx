import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Posts from "../components/Posts/Posts";
import styles from "./Style.module.css";
import { useState } from "react";

function MainForm({ Info, createPost, deletePost }) {
  const [postName, setPostName] = useState("");
  const [post, setPost] = useState("");
  const [postPhoto, setPostPhoto] = useState("");
  const addPost = () => {
    const id = localStorage.getItem("id");
    createPost(postName, post, postPhoto, id);
  };
  return (
    <div className={styles.MainForm}>
      <Header />
      <div className={styles.main}>
        {Info.post.map((postNum, index) => (
          <Posts
            key={index}
            Info={Info}
            index={index}
            deletePost={deletePost}
          />
        ))}
      </div>
      <div className={styles.types}>
        <input
          type="text"
          placeholder="PostName"
          value={postName}
          onChange={(event) => setPostName(event.target.value)}
        />
        <input
          type="text"
          placeholder="PostInfo"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
        <input
          type="text"
          placeholder="PostPhotoURL"
          value={postPhoto}
          onChange={(event) => setPostPhoto(event.target.value)}
        />
      </div>
      <div className={styles.main_buttons}>
        <div className={styles["manage-main__buttons"]}>
          <button
            type="button"
            id="openModal"
            className={`${styles["manage-main__button"]} ${styles["button-add"]} btn btn-success`}
            onClick={addPost}
          >
            Додати
          </button>
          <button
            type="button"
            className={`${styles["manage-main__button"]} ${styles["button-edit"]} btn btn-primary`}
          >
            Редагувати
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainForm;
