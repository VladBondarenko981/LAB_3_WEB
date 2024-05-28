// Header.jsx

import React from "react";
import styles from "./Header.module.css"; // Импорт стилей из файла Хедер.модуль.ксс
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className={styles.header__container}>
      <nav
        className={`${styles.header__nav} navbar navbar-expand-lg navbar-dark`}
      >
        <div className="container-fluid">
          <div
            className={`collapse navbar-collapse ${styles.navbarNav}`}
            id="navbarNav"
          >
            <ul className={`navbar-nav ${styles.navbarNav}`}>
              <li className="nav-item">
                <a
                  className={`${styles.header__logo} navbar-brand`}
                  href="index.html"
                >
                  <img
                    className={styles.logo}
                    src="https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid"
                    alt="Лого"
                  />
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active ${styles.navLink}`}
                  aria-current="page"
                  to="/home"
                >
                  Main
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/myProfile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signUp"
                  className={`nav-link ${styles.navLink}`}
                  href="html/signup.html"
                >
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signIn"
                  className={`nav-link ${styles.navLink}`}
                  href="html/signin.html"
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
