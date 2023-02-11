import React from "react";
import styles from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Contact() {
  return (
    <section className={styles["contact-control"]} id={"contact"}>
      <h5>Contact Me</h5>
      <div className={styles.contact}>
        <IconContext.Provider value={{ className: styles.icon }}>
          <div className={styles.position}>
            <div className={styles["icon-round"]}>
              <BsFillTelephoneFill />
            </div>
            <div className={styles.details}>
              <p>PHONE</p>
              <p>+91 9442107267</p>
            </div>
          </div>
          <div className={styles.position}>
            <div className={styles["icon-round"]}>
              <AiOutlineMail />
            </div>
            <div className={styles.details}>
              <p>EMAIL</p>
              <p>ajithmn007@gmail.com</p>
            </div>
          </div>
          <div className={styles.position}>
            <div className={styles["icon-round"]}>
              <FaLocationArrow />
            </div>
            <div className={styles.details}>
              <p>LOCATION</p>
              <p>Bangalore IN</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
}
