import React from "react";
import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <p>Contacs:</p>
      <a href="vl.bondarr@gmail.com">vl.bondarr@gmail.com</a>
      <a href="tel:+380684981197">+38 (068) 498-11-97</a>
      <p>&copy; 2024 Все права защищены</p>
    </div>
  );
}

export default Footer;
