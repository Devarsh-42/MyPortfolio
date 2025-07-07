import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.footerTop}>
          <div className={styles.contactInfo}>
            <h3 className={styles.title}>Let's Connect</h3>
            <p className={styles.subtitle}>
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=devarshmehta2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              title="Email"
            >
              <img src={getImageUrl("contact/email_icon.png")} alt="Email" />
            </a>
            <a
              href="https://www.linkedin.com/in/devarsh-mehta-6670581b8/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              title="LinkedIn"
            >
              <img
                src={getImageUrl("contact/linkedin_Icon.png")}
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://www.youtube.com/@StellarTech-nj7cu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              title="YouTube"
            >
              <img
                src={getImageUrl("contact/youtube_icon.jpg")}
                alt="Twitter"
              />
            </a>
            <a
              href="https://x.com/Devarsh_42"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              title="Twitter"
            >
              <img
                src={getImageUrl("contact/twitter_icon.jpg")}
                alt="Twitter"
              />
            </a>
            <a
              href="https://github.com/Devarsh-42"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              title="GitHub"
            >
              <img src={getImageUrl("contact/github_icon.png")} alt="GitHub" />
            </a>
            <a
              href="https://hashnode.com/@DevarshMehta"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              title="Blog"
            >
              <img src={getImageUrl("contact/blog_icon.png")} alt="Blog" />
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.divider}></div>
          <div className={styles.footerContent}>
            <p className={styles.copyright}>
              © 2024 Devarsh Mehta. All rights reserved.
            </p>
            <p className={styles.builtWith}>Built with React & passion ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
