import styles from "./Projects.module.css";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { MdRestaurantMenu } from "react-icons/md";
import { IconContext } from "react-icons/lib";

export default function Projects() {
  return (
    <section className={styles.project_control} id={"projects"}>
      <IconContext.Provider value={{ className: styles["icons"] }}>
        <h5 className={styles.h5}>Projects</h5>
        <div className={styles.projects}>
          <div className={styles.project}>
            <CgWebsite />
            <h5>Portfolio Website</h5>
            <p>
              This website was my first attempt at front-end development.
              Developed using CSS flexbox, grid ,this project taught me how
              important it is to get good at the basics.
            </p>
          </div>
          <div className={styles.project}>
            <MdRestaurantMenu />
            <h5>My Cookbook - React Application</h5>
            <p>
              Developed in React, this application lets users order recipes,
              store favourites and manage their shopping list. Application
              hosted on Amazon S3 and have crated API's using AWS API gateway
              and crated AWS Lambda functions to interact with Dynamo DB to
              fetch food catalog and store saved order. React-redux is used for
              state management.
            </p>
            <a href="/">Visit the site</a>
          </div>
        </div>
      </IconContext.Provider>
    </section>
  );
}
