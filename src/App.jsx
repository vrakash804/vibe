import "./App.css";
import PillNav from "./PillNav";
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

      <section id="home" className="hero">
        <div className="container">
          <h1>Hello, I'm Akash 👋</h1>
          <p>
            AI & Machine Learning Student | Full Stack Developer | Java Programmer
          </p>

          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
        </div>
      </section>

      <section id="about" className="container">
        <h2>About Me</h2>
        <p>
          I am pursuing B.E. in Artificial Intelligence & Machine Learning at
          RNS Institute of Technology. I enjoy building AI applications, web
          applications and solving real-world problems.
        </p>
      </section>

      <section id="skills" className="container">
        <h2>Skills</h2>

        <ul>
          <li>Java</li>
          <li>Python</li>
          <li>React</li>
          <li>Machine Learning</li>
          <li>SQL</li>
          <li>MongoDB</li>
        </ul>
      </section>

      <section id="projects" className="container">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>AI Smart Traffic Intelligence System</h3>

          <p>
            AI-powered traffic management platform using YOLOv8, FastAPI,
            OpenCV, React and MongoDB.
          </p>
        </div>

        <div className="project-card">
          <h3>Smartphone Stress Detection</h3>

          <p>
            Machine Learning model that predicts stress using smartphone usage
            behaviour.
          </p>
        </div>
      </section>

      <section id="resume" className="container">
        <h2>Resume</h2>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          View Resume
        </a>
      </section>

      <section id="contact" className="container">
        <h2>Contact</h2>

        <p>Email : vrakash804@gmail.com</p>

        <p>GitHub : github.com/vrakash804</p>

        <p>LinkedIn : linkedin.com/in/akash-v-r-aiml</p>
      </section>
    </div>
  );
}

export default App;