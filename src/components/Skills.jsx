function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal" data-reveal>
          <h2>
            Skills <span className="gradient-text">& Tools</span>
          </h2>
          <div className="underline"></div>
        </div>
        <div className="skills-grid">
          <div className="glass card reveal" data-reveal>
            <h3>Core Skills</h3>
            <div className="skill-item">
              <span>Python</span>
              <div className="bar">
                <i style={{ width: '90%' }}></i>
              </div>
            </div>
            <div className="skill-item">
              <span>Machine Learning</span>
              <div className="bar">
                <i style={{ width: '84%' }}></i>
              </div>
            </div>
            <div className="skill-item">
              <span>Video Coding</span>
              <div className="bar">
                <i style={{ width: '78%' }}></i>
              </div>
            </div>
            <div className="skill-item">
              <span>Frontend</span>
              <div className="bar">
                <i style={{ width: '88%' }}></i>
              </div>
            </div>
          </div>
          <div className="glass card reveal" data-reveal>
            <h3>Certifications</h3>
            <ul className="check-list">
              <li>Machine Learning Foundations</li>
              <li>AI for Everyone</li>
              <li>Advanced Web Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
