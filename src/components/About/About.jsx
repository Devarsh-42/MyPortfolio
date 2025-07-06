import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const technologies = [
    "Flutter", "React", "Node.js", "Firebase", 
    "AWS", "MongoDB", "Kotlin", "Java", "Python"
  ];

  return (
    <section className={styles.container} id="about">
      {/* Background glows */}
      <div className={styles.backgroundGlow1} />
      <div className={styles.backgroundGlow2} />
      <div className={styles.backgroundGlow3} />
      
      {/* Title */}
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          About <span className={styles.titleAccent}>Me</span>
        </h2>
        <div className={styles.titleUnderline}></div>
      </div>
      
      {/* Content */}
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.iconWrapper}>
              <img src={getImageUrl("about/android.png")} alt="Mobile Development" />
              <div className={styles.iconGlow}></div>
            </div>
            <div className={styles.aboutItemText}>
              <h3>Mobile Developer</h3>
              <p>
                I'm a Native & Cross Platform Mobile Developer with experience building responsive
                and cross-platform apps using Flutter, Kotlin, and Java. I've completed 3 internships,
                worked on multiple freelance projects, and contributed to numerous open-source projects.
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <div className={styles.iconWrapper}>
              <img src={getImageUrl("about/cloud.png")} alt="Cloud & DevOps" />
              <div className={styles.iconGlow}></div>
            </div>
            <div className={styles.aboutItemText}>
              <h3>Cloud & DevOps</h3>
              <p>
                I have worked extensively with AWS, GCP, and Azure cloud platforms. I've deployed 
                websites and ML YOLO models on AWS, and have hands-on experience with Docker, 
                Kubernetes, and VMs for scalable infrastructure solutions.
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
            <div className={styles.iconWrapper}>
              <img src={getImageUrl("about/backend.png")} alt="Backend Development" />
              <div className={styles.iconGlow}></div>
            </div>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Experienced in developing fast and optimized back-end systems and APIs using Flask, 
                FastAPI, and NodeJS. I've worked with Firebase, MongoDB, MySQL, PostgreSQL, and 
                AWS DynamoDB. Through internships, I've gained experience with Supabase and PostgreSQL,
                and have developed MCP servers for enhanced backend capabilities.
              </p>
            </div>
          </li>
        </ul>
      </div>
      
    </section>
  );
};