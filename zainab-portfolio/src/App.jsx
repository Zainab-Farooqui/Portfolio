import Navbar from "./layout/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

/* inside return */



import "./styles/global.css";
import "./styles/hero.css";
import "./styles/nav.css";
import "./styles/projects.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />      
      <Skills />
      <Achievements />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
