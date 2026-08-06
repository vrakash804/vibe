function Resume() {
  return (
    <section id="resume">
      <div className="container">
        <div className="glass card reveal resume-card" data-reveal>
          <div className="section-header">
            <h2>
              View <span className="gradient-text">Resume</span>
            </h2>
            <div className="underline"></div>
          </div>
          <p>View my resume to see my academic background, skills, and projects in one place.</p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
