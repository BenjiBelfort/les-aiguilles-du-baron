import { useState, useEffect, useRef, useCallback } from "react";
import "./testimonials.css";
import testimonialsData from "../../data/testimonials.json";
import leftHand from "../../assets/left-hand.png";
import rightHand from "../../assets/right-hand.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null); // Position initiale du toucher
  const [touchEndX, setTouchEndX] = useState(null); // Position finale du toucher
  const intervalRef = useRef(null);

  const clearTimers = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  const triggerTransition = useCallback((newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 500);
  }, []);

  const startInterval = useCallback(() => {
    clearTimers();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 15000);
  }, [clearTimers]);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    clearTimers();
    triggerTransition((currentIndex + 1) % testimonialsData.length);
    setTimeout(startInterval, 500);
  }, [isTransitioning, currentIndex, clearTimers, triggerTransition, startInterval]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    clearTimers();
    triggerTransition(currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1);
    setTimeout(startInterval, 500);
  }, [isTransitioning, currentIndex, clearTimers, triggerTransition, startInterval]);

  // Gestion du toucher
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX); // Enregistre la position initiale du toucher
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX); // Enregistre la position actuelle du toucher
  };

  const handleTouchEnd = () => {
    if (touchStartX && touchEndX) {
      const deltaX = touchEndX - touchStartX; // Calcule la distance de balayage
      const swipeThreshold = 50; // Seuil de balayage (en pixels)

      if (deltaX > swipeThreshold) {
        // Balayage vers la droite : précédent
        handlePrev();
      } else if (deltaX < -swipeThreshold) {
        // Balayage vers la gauche : suivant
        handleNext();
      }
    }

    // Réinitialise les positions
    setTouchStartX(null);
    setTouchEndX(null);
  };

  useEffect(() => {
    startInterval();
    return () => clearTimers();
  }, [startInterval, clearTimers]);

  return (
    <section id="Testimonials">
      <h3>Témoignages</h3>
      <div className="frame-container">
        <div className="outer-frame">
          <div className="inner-frame">
            <div
              className="carousel"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <p className="quote">,,</p>
              <p className="quote2">,,</p>
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className={`testimonial ${index === currentIndex ? "actif" : ""}`}>

                  <div className="text-container">
                    <p className="testimonial-text">{testimonial.text}</p>
                  </div>
                  <div className="frame_footer">
                    <p className="testimonial-signature">{testimonial.signature}</p>
                    <p className="testimonial-counter">
                      {index + 1} / {testimonialsData.length}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="navigation">
        <button onClick={handlePrev} disabled={isTransitioning} className="nav-btn">
          <img src={leftHand} alt="Précédent" className="nav-icon" />
        </button>
        <button onClick={handleNext} disabled={isTransitioning} className="nav-btn">
          <img src={rightHand} alt="Suivant" className="nav-icon" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;