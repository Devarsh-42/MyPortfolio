import React, { useRef, useEffect } from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const experienceItems = document.querySelectorAll(`.${styles.historyItem}`);
    experienceItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      experienceItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className={styles.container} id="experience" ref={experienceRef}>
      <div className={styles.header}>
        <div className={styles.headerLine}></div>
        <h2 className={styles.title}>Professional Journey</h2>
        <div className={styles.headerLine}></div>
      </div>
      
      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>
        
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.timelineMarker}>
                  <div className={styles.dot}></div>
                </div>
                
                <div className={styles.historyCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.logoContainer}>
                      <img
                        src={getImageUrl(historyItem.imageSrc)}
                        alt={`${historyItem.organisation} Logo`}
                        className={styles.companyLogo}
                      />
                    </div>
                    <div className={styles.headerInfo}>
                      <h3 className={styles.role}>{historyItem.role}</h3>
                      <h4 className={styles.organisation}>{historyItem.organisation}</h4>
                    </div>
                  </div>
                  
                  <div className={styles.dateTag}>
                    <span>{`${historyItem.startDate} - ${historyItem.endDate}`}</span>
                  </div>
                  
                  <div className={styles.historyItemDetails}>
                    <ul className={styles.experienceList}>
                      {historyItem.experiences.map((experience, id) => (
                        <li key={id} className={styles.experienceItem}>
                          <span className={styles.bulletPoint}></span>
                          {experience}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};