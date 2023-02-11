import React from "react";
import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiKubernetes,
  SiAmazonaws,
  SiJirasoftware,
  SiAmazondynamodb,
  SiAmazons3,
} from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { IconContext } from "react-icons";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id={"skills"}>
      <h5 className={styles.heading}>Skills</h5>
      <div className={styles.skills}>
        <IconContext.Provider value={{ className: styles["skill-icon"] }}>
          <div className={styles.frontend}>
            <p className={styles["frontend-label"]}>Front-End</p>
            <div className={styles["icon-style"]}>
              <div className={styles.icon}>
                <SiHtml5 />
                <p>HTML5</p>
              </div>
              <div className={styles.icon}>
                <SiCss3 />
                <p>CSS3</p>
              </div>
              <div className={styles.icon}>
                <SiJavascript />
                <p>JavaScript</p>
              </div>
              <div className={styles.icon}>
                <IoLogoReact />
                <p>React</p>
              </div>
            </div>
          </div>
          <div className={styles.cloud}>
            <p className={styles["cloud-label"]}>Cloud</p>
            <div className={styles["icon-style"]}>
              <div className={styles.icon}>
                <SiAmazonaws />
                <p>AWS</p>
              </div>
              <div className={styles.icon}>
                <SiAmazondynamodb />
                <p>DynamoDB</p>
              </div>
              <div className={styles.icon}>
                <SiAmazons3 />
                <p>S3 Storage</p>
              </div>
              <div className={styles.icon}>
                <SiKubernetes />
                <p>Kubernetes</p>
              </div>
              <div className={styles.icon}>
                <SiJirasoftware />
                <p>Jira</p>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
}
