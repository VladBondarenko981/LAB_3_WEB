import React from "react";
import styles from "./SignUpUser.module.css";

function SignUpUser(props) {
  return (
    <main className={styles.page}>
      <section className={`${styles.py5} py-5`}>
        <div className={styles.container}>
          <form>
            <div className={`${styles.g3} row g-3`}>
              <div className={styles.colmd6}>
                <label htmlFor="InputNickname1" className={styles.formLabel}>
                  Nickname
                </label>
                <input
                  type="text"
                  className={styles.formControl}
                  id="InputNickname1"
                  placeholder="Enter your nickname"
                />
              </div>
              <div className={styles.colmd6}>
                <label htmlFor="InputEmail1" className={styles.formLabel}>
                  Email address
                </label>
                <input
                  type="email"
                  className={styles.formControl}
                  id="InputEmail1"
                  placeholder="Enter your email"
                />
              </div>
              <div className={styles.colmd6}>
                <label htmlFor="InputTel1" className={styles.formLabel}>
                  Phone number
                </label>
                <input
                  type="tel"
                  className={styles.formControl}
                  id="InputTel1"
                  placeholder="Enter your phone"
                />
              </div>
              <div className={styles.colmd6}>
                <label htmlFor="InputPassword1" className={styles.formLabel}>
                  Password
                </label>
                <input
                  type="password"
                  className={styles.formControl}
                  id="InputPassword1"
                  placeholder="Create your password"
                />
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="Check1"
                  />
                  <label className="form-check-label" htmlFor="Check1">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className={`${styles.btn} ${styles.btnPrimary}`}
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className={`${styles.btn} ${styles.btnSecondary}`}
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignUpUser;
