import React from "react";
import styles from "./Blog.module.css";

function Blog(props) {
  return (
    <div className={styles.page__about}>
      <div className={styles.about__container + " container"}>
        <div className={styles.about__text}>
          <ul className={styles.about__list}>
            <li>
              <span className="material-icons">person_add</span>
              <strong>Додавання постів:</strong> Легко додайте нові пости,
              заповнивши їхні основні відомості, такі як фотокартка і опис.
            </li>
            <li>
              <span className="material-icons">delete</span>
              <strong>Видалення постів:</strong> Ви маєте можливість видалити
              будь-який пост, якщо він більше не актуальний або потрібен.
            </li>
            <li>
              <span className="material-icons">edit</span>
              <strong>Редагування постів:</strong> Оновіть інформацію про пости
              в будь-який час — змініть заголовок, додайте примітку або вкажіть
              нову інформацію.
            </li>
          </ul>
          <p>
            "Our website is a small travel blog in English, dedicated to
            exploring the world and sharing adventures. Join us as we wander
            through destinations near and far, discovering new cultures,
            cuisines, and experiences along the way!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
