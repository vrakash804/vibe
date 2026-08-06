import aiTraffic from '../assets/ai-traffic.svg';
import stressDetection from '../assets/stress-detection.svg';

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal" data-reveal>
          <h2>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="underline"></div>
        </div>
        <div className="grid">
          <article className="glass card reveal project-card" data-reveal>
            <img src={aiTraffic} alt="AI traffic prediction project preview" />
            <h3>AI Traffic Intelligence</h3>
            <p>Exploring predictive analytics for traffic patterns and anomaly detection with intelligent systems.</p>
          </article>
          <article className="glass card reveal project-card" data-reveal>
            <img src={stressDetection} alt="Stress detection project preview" />
            <h3>Stress Detection Model</h3>
            <p>A prototype focused on detecting stress-related patterns using lightweight classification techniques.</p>
          </article>
          <article className="glass card reveal project-card" data-reveal>
            <div className="emoji">🎬</div>
            <h3>Video Coding Explorer</h3>
            <p>Researching efficient compression pipelines and practical approaches for media processing.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
