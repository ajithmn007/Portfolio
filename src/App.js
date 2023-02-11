import styles from "./App.module.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className={styles.backgroundImage}>
        <Header />
        <Profile />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
