import React, { useState } from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, videoId },
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Extract YouTube video ID from demo URL if videoId is not provided
  const extractYouTubeId = (url) => {
    if (videoId) return videoId;
    if (!url) return null;
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})/
    );
    return match ? match[1] : null;
  };

  const youtubeId = extractYouTubeId(demo);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        {!isHovered ? (
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
          />
        ) : youtubeId ? (
          <iframe
            className={styles.video}
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${youtubeId}`}
            title={`${title} Demo`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <img
            src={getImageUrl(imageSrc)}
            alt={`Image of ${title}`}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.skillsContainer}>
          {skills.map((skill, id) => {
            return (
              <span key={id} className={styles.skill}>
                {skill}
              </span>
            );
          })}
        </div>
        <a
          href={source}
          className={styles.sourceButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 19C4 20.5 4 16.5 2 16M22 16V22C22 22 20 22 20 22H4C4 22 2 22 2 22V16M22 16L18.5 12.5M9 19L13 15M22 16C22 16 22 14 22 14V8C22 8 22 6 22 6H2C2 6 2 8 2 8V14C2 14 2 16 2 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          View Source Code
        </a>
      </div>
    </div>
  );
};
