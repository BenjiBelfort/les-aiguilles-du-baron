import { useState, useEffect } from "react";
import "./testimonials.css";
import testimonialsData from "../../data/testimonials.json";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextTestimonial = () => {
    setFade(false); // Début de l'effet de disparition
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true); // Début de l'effet d'apparition
    }, 500); // Correspond à la durée du fade-out
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval); // Nettoyage à la fin
  }, []);

  return (
    <section id="Testimonials">
      <div className="carousel">
        <div
          className={`testimonial ${
            fade ? "fade-in" : "fade-out"
          }`}
        >
          {testimonialsData[currentIndex].photo && (
            <img
              src={testimonialsData[currentIndex].photo}
              alt={`Photo de ${testimonialsData[currentIndex].signature}`}
              className="testimonial-photo"
            />
          )}
          <p className="testimonial-text">
            {testimonialsData[currentIndex].text}
          </p>
          <p className="testimonial-signature">
            - {testimonialsData[currentIndex].signature}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
