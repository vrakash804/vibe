import "./App.css";
import PillNav from "./components/PillNav";
import Hero from "./components/Hero";
import ScrollVelocity from "./components/ScrollVelocity";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import logo from "../assets/favicon.png";

function App() {
  return (
    <div className="app">
      <PillNav
        logo={logo}
        logoAlt="Akash Logo"
        items={[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Education", href: "#education" },
          { label: "Certificates", href: "#certificates" },
          { label: "Projects", href: "#projects" },
          { label: "Resume", href: "#resume" },
          { label: "Contact", href: "#contact" },
        ]}
        activeHref="#home"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />

      <Hero />

      <ScrollVelocity text="HELLO I AM AKASH V R" baseVelocity={1.8} />

      <About />
      <Skills />
      <Education />
      <Certificates />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;