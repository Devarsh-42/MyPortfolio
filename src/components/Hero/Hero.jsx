import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Devarsh</h1>
        <p className={styles.description}>
          Hello, I am Devarsh Mehta, a Cross-Platform and Native Android Developer with a focus on app development using modern frameworks and AI-driven solutions. Skilled in Data Structures and Algorithms (DSA), with a strong foundation in Mobile App design and backend development. Currently a 3rd-year ICT undergraduate passionate about building impactful technology solutions.
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:devarshmehta.42@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="assets/hero/MyResume_2025.pdf"
            className={styles.downloadBtn}
            download>
            Download Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
