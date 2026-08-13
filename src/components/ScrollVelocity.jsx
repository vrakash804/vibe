import { useEffect, useRef } from 'react';
import './ScrollVelocity.css';

export default function ScrollVelocity({
  text = "HELLO I AM AKASH V R",
  baseVelocity = 1.5,
  className = ""
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let currentX = 0;
    let scrollVelocity = 0;
    let animationFrameId;

    const onScroll = () => {
      const dy = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      scrollVelocity = dy * 0.15;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const animate = () => {
      // Decay scroll velocity smoothly back to 0
      scrollVelocity *= 0.92;
      
      // Effective velocity = baseVelocity + extra scroll velocity
      const velocity = baseVelocity + (scrollVelocity > 0 ? Math.min(scrollVelocity, 10) : Math.max(scrollVelocity, -10));
      
      currentX -= velocity;
      
      // Infinite loop wrap around
      if (trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2;
        if (Math.abs(currentX) >= halfWidth) {
          currentX = 0;
        }
        trackRef.current.style.transform = `translate3d(${currentX}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [baseVelocity]);

  // Repeated text units for seamless ticker loop
  const content = `${text} • `;
  const repeatedText = Array(8).fill(content).join('');

  return (
    <div className={`scroll-velocity-container ${className}`} ref={containerRef}>
      <div className="scroll-velocity-track" ref={trackRef}>
        <span className="scroll-velocity-text">{repeatedText}</span>
        <span className="scroll-velocity-text">{repeatedText}</span>
      </div>
    </div>
  );
}
