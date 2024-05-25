import React from "react";
import styles from "./ProfileUser.module.css";

function ProfileUser(props) {
  return (
    <main className={styles.page}>
      <div className={styles.page__profile + " " + styles.profile}>
        <div className={styles.profile__container + " " + styles.container}>
          <div
            className={
              styles.profile__alert +
              " " +
              styles.alert +
              " " +
              styles["alert-danger"]
            }
            role="alert"
          >
            You need to sign in to get access to profile page!
          </div>
          <table
            className={
              styles.profile__table +
              " " +
              styles.table +
              " " +
              styles["table-primary"]
            }
          >
            <tbody>
              <tr>
                <th>Nickname</th>
                <td>Unknown</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>Unknown</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>Unknown</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>Unknown</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>Unknown</td>
              </tr>
              <tr>
                <th>Amount of contacts</th>
                <td>Unknown</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default ProfileUser;
