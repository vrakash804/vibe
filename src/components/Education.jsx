function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header reveal" data-reveal>
          <h2>
            Education <span className="gradient-text">Timeline</span>
          </h2>
          <div className="underline"></div>
        </div>
        <div className="glass card reveal timeline-card" data-reveal>
          <div className="timeline">
            <div className="timeline-item">
              <span className="dot"></span>
              <div>
                <strong>2022 – Present</strong>
                <p>B.E. in Computer Science (AIML), RNS Institute of Technology</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="dot"></span>
              <div>
                <strong>Specialization</strong>
                <p>Artificial Intelligence, Machine Learning, and Multimedia Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
