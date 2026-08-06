import { useEffect, useState } from 'react';

const certificates = [
  {
    number: '05',
    tag: 'Deep Learning',
    title: 'Neural Networks & Deep Learning',
    issuer: 'DeepLearning.AI • Coursera',
    description: 'Mastered deep neural network architectures, hyperparameter tuning, CNNs, and Sequence Models.',
    year: '2024'
  },
  {
    number: '04',
    tag: 'Video Engineering',
    title: 'Video Processing & Compression',
    issuer: 'Media Systems Institute',
    description: 'Advanced study in H.264/HEVC/AV1 codecs, motion estimation, bitrate control, and streaming pipelines.',
    year: '2024'
  },
  {
    number: '03',
    tag: 'Web Architecture',
    title: 'Advanced Web Systems & Design',
    issuer: 'Meta Front-End Specialization',
    description: 'Focused on modern web applications, high performance rendering, dynamic layouts, and responsive UI systems.',
    year: '2023'
  },
  {
    number: '02',
    tag: 'Artificial Intelligence',
    title: 'AI for Everyone & Systems',
    issuer: 'Stanford Online',
    description: 'Foundational principles of AI project workflows, model evaluation, dataset engineering, and ethical AI deployment.',
    year: '2023'
  },
  {
    number: '01',
    tag: 'Machine Learning',
    title: 'Machine Learning Foundations',
    issuer: 'Google Cloud / Coursera',
    description: 'Comprehensive certification in statistical machine learning algorithms, model evaluation, and predictive pipelines.',
    year: '2023'
  }
];

function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((value) => (value + 1) % certificates.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const getOffset = (index) => {
    const offset = (index - activeIndex + certificates.length) % certificates.length;

    if (offset === 0) {
      return { transform: 'translate3d(0, 0px, 0px) scale(1)', opacity: 1, zIndex: 5, pointerEvents: 'auto' };
    }
    if (offset === 1) {
      return { transform: 'translate3d(0, 22px, -35px) scale(0.93)', opacity: 0.85, zIndex: 4, pointerEvents: 'auto' };
    }
    if (offset === 2) {
      return { transform: 'translate3d(0, 44px, -70px) scale(0.86)', opacity: 0.65, zIndex: 3, pointerEvents: 'auto' };
    }
    if (offset === 3) {
      return { transform: 'translate3d(0, 66px, -105px) scale(0.79)', opacity: 0.45, zIndex: 2, pointerEvents: 'none' };
    }

    return { transform: 'translate3d(0, 88px, -140px) scale(0.72)', opacity: 0.2, zIndex: 1, pointerEvents: 'none' };
  };

  const changeSlide = (direction) => {
    setActiveIndex((value) => (value + direction + certificates.length) % certificates.length);
  };

  return (
    <section id="certificates">
      <div className="container">
        <div className="section-header reveal" data-reveal>
          <h2>
            Certificates <span className="gradient-text">& Credentials</span>
          </h2>
          <div className="underline"></div>
        </div>

        <div className="slider-wrapper reveal" data-reveal>
          <div className="slider">
            {certificates.map((certificate, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={certificate.number}
                  className={`item glass card ${isActive ? 'active-item' : ''}`}
                  style={getOffset(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="cert-card-content">
                    <div className="cert-header">
                      <span className="cert-badge">{certificate.number}</span>
                      <span className="cert-tag">{certificate.tag}</span>
                    </div>
                    <h3>{certificate.title}</h3>
                    <p className="cert-issuer">{certificate.issuer}</p>
                    <p className="cert-desc">{certificate.description}</p>
                    <div className="cert-footer">
                      <span className="cert-year">{certificate.year}</span>
                      <a href="#" className="cert-link" onClick={(event) => event.preventDefault()}>
                        Verify Credential ↗
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="slider-controls">
            <button className="slider-arrow prev-btn" onClick={() => changeSlide(-1)} aria-label="Previous Certificate">
              ‹
            </button>
            <div className="slider-dots">
              {certificates.map((certificate, index) => (
                <span
                  key={certificate.number}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
            <button className="slider-arrow next-btn" onClick={() => changeSlide(1)} aria-label="Next Certificate">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
