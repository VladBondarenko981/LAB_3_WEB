import React from "react";
import styles from "./Users.module.css";

function Users({ index, Info, deletePost }) {
  const deleteUserDel = () => {
    deletePost(index);
  };
  return (
    <div className={styles.fontCard}>
      <div className={styles.card}>
        <div className={styles.textContainer}>
          <h1 className={styles.number}>{Info.userId[index]}</h1>
          <h1 className={styles.title}>{Info.userName[index]}</h1>
          <h1 className={styles.subtitle}>{Info.userNumber[index]}</h1>
        </div>
        <button onClick={deleteUserDel}>Видалити</button>
      </div>
    </div>
  );
}

export default Users;
