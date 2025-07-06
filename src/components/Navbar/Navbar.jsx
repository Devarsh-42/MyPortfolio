import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img 
          src={getImageUrl("nav/devarsh_profile_pic_nav.png")} 
          alt="Devarsh Mehta" 
          className={styles.logoImg}
        />
      </div>
      
      <div className={styles.menu}>
        <img 
          className={styles.menuBtn} 
          src={getImageUrl("nav/menuIcon.png")} 
          alt="menu-button" 
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
          {["About", "Experience", "Skills", "Projects", "Contact"].map((item, index) => (
            <li key={item} className={styles.menuItem}>
              <a 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};