import { useEffect, useState } from 'react';
import profile from '../../assets/profile.svg';

const phrases = ['AI/ML Enthusiast', 'Frontend Builder'];

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextCharIndex = charIndex + 1;
        setDisplayText(currentPhrase.slice(0, nextCharIndex));

        if (nextCharIndex >= currentPhrase.length) {
          window.setTimeout(() => setIsDeleting(true), 900);
        } else {
          setCharIndex(nextCharIndex);
        }
      } else {
        const nextCharIndex = charIndex - 1;
        setDisplayText(currentPhrase.slice(0, Math.max(0, nextCharIndex)));

        if (nextCharIndex <= 0) {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
          setCharIndex(0);
        } else {
          setCharIndex(nextCharIndex);
        }
      }
    }, isDeleting ? 70 : 100);

    return () => window.clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content reveal" data-reveal>
          <span className="hero-tag">AI/ML • Web Tech</span>
          <h1>
            Hello, I’m Akash.
            <br />
            <span className="gradient-text">{displayText}</span>
          </h1>
          <p>
            I’m a Computer Science student specializing in AI/ML, building thoughtful digital products at the intersection of machine learning and multimedia systems.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">
              Explore Projects
            </a>
            <a href="resume.html" target="_blank" rel="noopener noreferrer" className="btn">
              View Resume
            </a>
          </div>
          <div className="social-row">
            <a href="https://github.com/vrakash804" target="_blank" rel="noreferrer" className="social-pill">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/akash-v-r-aiml/" target="_blank" rel="noreferrer" className="social-pill">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual reveal" data-reveal>
          <div className="profile-card glass">
            <img src={profile} alt="Akash portrait" />
            <div className="profile-badge">RNSIT • CS (AIML)</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
