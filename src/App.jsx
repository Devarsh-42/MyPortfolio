import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/skills"; // Importing the new Skills component

function App() {
  return (
    <div className={styles.App}>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills /> {/* Render Skills section before Experience */}
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
