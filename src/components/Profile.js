import React from "react";
import image from "../Assets/image.jpeg";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <section id= {"home"}>
      <div className={styles.content}>
        <figure>
          <img className={styles.image} src={image} alt="" title="image" />
        </figure>
        <div className={styles.info}>
          <h3>Hi, I am Ajith</h3>
          <p>Front End Developer</p>
        </div>
      </div>
    </section>
  );
}
