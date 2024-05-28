import React from "react";
import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <p>Contacs:</p>
      <a>Stupnytska Sofia</a>
      <p>&copy; 2024 Все права защищены</p>
    </div>
  );
}

export default Footer;
