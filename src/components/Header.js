import React, { useState } from "react";
import styles from "./Header.module.css";
import { Waypoint } from "react-waypoint";
export default function Header() {
  const [isStickyHeader, setIsStickyHeader] = useState(false);

  return (
    <Waypoint
      onEnter={() => setIsStickyHeader(false)}
      onLeave={() => setIsStickyHeader(true)}
      bottomOffset="650px"
    >
      <header className={styles.header}>
        <nav className={`${styles.nav} ${isStickyHeader ? styles.sticky : ""}`}>
          <h5 className={styles.name}>Ajith Manivannan</h5>
          <div className={styles["main-nav"]}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <a href="#home">Home</a>
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
    </Waypoint>
  );
}
