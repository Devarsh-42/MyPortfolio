import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { Navbar } from "../Navbar/Navbar";

export const Hero = () => {
  return (
    <section className={styles.container}>
      {/* Add Navbar */}
      <Navbar />

      {/* Content Section */}
      <div className={styles.content}>
        <div className={styles.greeting}>👋 Hello, I'm</div>
        <h1 className={styles.title}>
          <span className={styles.titleName}>Devarsh Mehta</span>
          <span className={styles.titleRole}>Mobile & Backend Developer</span>
        </h1>
        <p className={styles.description}>
          I'm a <span className={styles.highlight}>4th-year ICT Engineering student</span>, a{" "}
          <span className={styles.highlight}>Cross-Platform & Native Mobile Development</span> and{" "}
          <span className={styles.highlight}>Backend Development</span>. I have hands-on experience building{" "}
          <span className={styles.highlight}>AI-powered applications</span> with{" "}
          <span className={styles.highlight}>AI agent integration</span>, and I've also have experience with deployment and scaling processes on various{" "}
          <span className={styles.highlight}>Cloud Platforms</span>.
        </p>

        <div className={styles.buttonContainer}>
          <a
            href="https://github.com/Devarsh-42"
            className={styles.contactBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/github_icon.png")}
              alt="GitHub"
              className={styles.btnIcon}
            />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/devarsh-mehta-6670581b8/"
            className={styles.secondaryBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/linkedin_Icon.png")}
              alt="LinkedIn"
              className={styles.btnIcon}
            />
            LinkedIn
          </a>
          <a
            href="https://hashnode.com/@DevarshMehta"
            className={styles.secondaryBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/blog_icon.png")}
              alt="Blog"
              className={styles.btnIcon}
            />
            Blog
          </a>
          <a
            href="/resume.pdf"
            className={styles.downloadBtn}
            download="Devarsh_Mehta_Resume.pdf"
          >
            <span className={styles.btnIconText}>📄</span>
            Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <div className={styles.imageBg}></div>
          <img
            src={getImageUrl("hero/devarsh_profile_pic.jpg")}
            alt="Hero image of Devarsh"
            className={styles.heroImg}
          />
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundGrid}></div>
      <div className={styles.gradientOrb1}></div>
      <div className={styles.gradientOrb2}></div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollText}>Explore My Work</div>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot}></div>
        </div>
      </div>
    </section>
  );
};
