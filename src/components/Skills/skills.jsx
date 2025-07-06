import React from "react";
import styles from "./skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      {/* Background glows */}
      <div className={styles.backgroundGlow1} />
      <div className={styles.backgroundGlow2} />
      
      {/* Title */}
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          <span className={styles.titleHighlight}>Tech</span> Skills
        </h2>
        <div className={styles.titleUnderline}></div>
      </div>
      
      {/* Skills Grid */}
      <div className={styles.skillsGrid}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p className={styles.skillTitle}>{skill.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
