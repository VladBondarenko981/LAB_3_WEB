import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Users from "../components/Users/Users";
import styles from "./Style.module.css";
import { useState } from "react";

function MainForm({ Info, createUser, deleteUser }) {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const addUser = () => {
    const id = localStorage.getItem("id");
    createUser(userId, userName, userNumber);
  };
  return (
    <div className={styles.MainForm}>
      <Header />
      <div className={styles.main}>
        {Info.userName.map((postNum, index) => (
          <Users
            key={index}
            Info={Info}
            index={index}
            deleteUser={deleteUser}
          />
        ))}
      </div>
      <div className={styles.types}>
        <input
          type="text"
          placeholder="UserId"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
        <input
          type="text"
          placeholder="UserName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="text"
          placeholder="UserNumber"
          value={userNumber}
          onChange={(event) => setUserNumber(event.target.value)}
        />
      </div>
      <div className={styles.main_buttons}>
        <div className={styles["manage-main__buttons"]}>
          <button
            type="button"
            id="openModal"
            className={`${styles["manage-main__button"]} ${styles["button-add"]} btn btn-success`}
            onClick={addUser}
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
