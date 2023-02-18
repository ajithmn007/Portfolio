import React from "react";
import styles from "./About.module.css";
import { MdMail, MdLocationOn } from "react-icons/md";
import { ImCalendar, ImPhone } from "react-icons/im";
import { GrLinkedinOption } from "react-icons/gr";
import { IconContext } from "react-icons";
import resume from "../Assets/Resume.pdf";

export default function Skills() {
  return (
    <section className={styles.about} id={"about"}>
      <section className={styles.info}>
        <h5>Hi, there! I'm Ajith</h5>
        <p>
          I am a professional software engineer from Bangalore, India with five
          years experience. Two years as Front end Developer and three years as
          AWS cloud consultant. I create awesome websites with beautiful,
          minimalist UX. I love coding and I love learning new technologies. I
          am passionate about what I do and I am exploring new opportunities to
          enhance my capabilities as a developer. I have experience in
          configuring and hosting application on AWS resources.
        </p>
        <div>
          <div className={styles["basic-info"]}>
            <MdMail />
            <span className={styles["contact-heading"]}>
              Email:
              <span className={styles["contact-values"]}>
                {" "}
                ajithmn007@gmail.com
              </span>
            </span>
          </div>
          <div className={styles["basic-info"]}>
            <ImCalendar />
            <span className={styles["contact-heading"]}>
              Date of birth:
              <span className={styles["contact-values"]}> 18 Aug 1996</span>
            </span>
          </div>
          <div className={styles["basic-info"]}>
            <MdLocationOn />
            <span className={styles["contact-heading"]}>
              Location:
              <span className={styles["contact-values"]}> Bangalore, IN</span>
            </span>
          </div>
          <div className={styles["basic-info"]}>
            <ImPhone />
            <span className={styles["contact-heading"]}>
              Phone Number:
              <span className={styles["contact-values"]}> 9442107267</span>
            </span>
          </div>
          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/in/ajith-manivannan-539191132/"
              rel="noreferrer"
              target="_blank"
            >
              <IconContext.Provider value={{ className: styles.linkedin }}>
                <div>
                  <GrLinkedinOption />
                </div>
              </IconContext.Provider>
            </a>

            <a
              href={resume}
              className={styles.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
      <section className={styles.education}>
        <div className={styles.heading}>
          <h5>Experience </h5>
          <p className={styles.title}>
            Current Company:
            <span> Accenture Ltd.</span>
          </p>
          <p className={styles.title}>
            Role:
            <span>Application Development Senior Analyst</span>
          </p>
          <p className={styles.para}>November 2022 - Present (1.2 Years)</p>
        </div>
        <div>
          <p className={styles.title}>
            Previous Company:
            <span> Tech Mahindra Ltd.</span>
          </p>
          <p className={styles.title}>
            Role:
            <span>Software Developer</span>
          </p>
          <p className={styles.para}>March 2018 - October 2021 (3.7 Years)</p>
        </div>
        <div className={`${styles.heading} ${styles.bold}`}>
          <h5>Education</h5>
          <p className={styles.title}>
            B.E.
            <span>Mechanical Engineering</span>
            <p>Anna University, TN.</p>
          </p>
        </div>
        <div className={styles.heading}>
          <h5>Languages</h5>
          <p className={styles.para}>
            Tamil and English - Professional proficiency
          </p>
          <p className={styles.para}>Kannada - Elementary proficiency</p>
        </div>
      </section>
    </section>
  );
}
