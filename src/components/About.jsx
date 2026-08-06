function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal" data-reveal>
          <h2>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="underline"></div>
        </div>
        <div className="about-grid">
          <div className="glass card reveal" data-reveal>
            <p>
              I’m currently pursuing my Bachelor of Engineering in Computer Science with specialization in Artificial Intelligence and Machine Learning at RNS Institute of Technology.
            </p>
            <p>
              I enjoy turning complex ideas into practical experiences through experimentation, systems thinking, and elegant interfaces.
            </p>
            <div className="pill-row">
              <span className="pill">Python</span>
              <span className="pill">Machine Learning</span>
              <span className="pill">Video Processing</span>
              <span className="pill">Frontend</span>
            </div>
          </div>
          <div className="glass card reveal" data-reveal>
            <h3>Quick Snapshot</h3>
            <div className="timeline">
              <div className="timeline-item">
                <span className="dot"></span>
                <div>
                  <strong>Current Role</strong>
                  <p>Student & Aspiring AI Engineer</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="dot"></span>
                <div>
                  <strong>Interests</strong>
                  <p>Machine learning, coding systems, and media intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
