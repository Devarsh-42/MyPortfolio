import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <br></br>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/android.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile Developer</h3>
              <p>
                I'm a Native & Cross Platform Mobile Developer with experience in building responsive
                and cross-platform apps using Flutter, Kotlin, and Java.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloud.png")} alt="Cloud icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud & DevOps</h3>
              <p>
                I have worked on AWS, GCP, and Azure. I have deployed websites and ML Yolo models on AWS, and used Docker, Kubernetes, and VMs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backend.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Experienced in developing fast and optimized back-end systems and APIs using Flask, FastAPI, and NodeJS. Additionally, I have worked with Firebase, MongoDB, MySQL, PostgreSQL, and AWS DynamoDB.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
