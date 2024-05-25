import React from "react";
import styles from "./SignInUser.module.css"; // Путь к CSS модулю

function SignInUser(props) {
  return (
    <div className={styles.page__signin + " " + styles.signin}>
      <div className={styles.signin__container + " " + styles.container}>
        <form className={styles["main-login__form"]} action="#">
          <div className="mb-3">
            <label htmlFor="InputLogin" className="form-label">
              Login (nickname, email or phone number)
            </label>
            <input
              className={"form-control " + styles["form-control"]}
              type="text"
              id="InputLogin"
              placeholder="Enter your login"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword1" className="form-label">
              Enter your password
            </label>
            <input
              type="password"
              className={"form-control " + styles["form-control"]}
              id="InputPassword1"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className={"btn btn-primary " + styles.btn}>
            Submit
          </button>
          <button type="reset" className={"btn btn-secondary " + styles.btn}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInUser;
