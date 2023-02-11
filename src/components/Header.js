import React from "react";
import styles from "./Header.module.css";
import { useScrollDirection } from "../Assets/useScrollDirection";
export default function Header() {
  const scroll = useScrollDirection();
  console.log(scroll);
  const header = `${styles.header} ${
    scroll === "down" ? styles.hide : styles.show
  }`;
  console.log(header);
  return (
    <>
      <header className={header}>
        <nav className={styles.nav}>
          <h5 className={styles.name}>Ajith</h5>
          <div className={styles["main-nav"]}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <a href="/">Home</a>
              </li>
              <li className={styles.li}>
                <a href="#about">About</a>
              </li>
              <li className={styles.li}>
                <a href="#skills">Skills</a>
              </li>
              <li className={styles.li}>
                <a href="#projects">Projects</a>
              </li>
              <li className={styles.li}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
