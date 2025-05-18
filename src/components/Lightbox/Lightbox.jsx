import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './lightbox.css';
import useSwipe from '../../hook/useSwipe';

import leftArrowIcon from '../../assets/left-hand.png';
import rightArrowIcon from '../../assets/right-hand.png';
import closeIcon from '../../assets/cross.png';

const Lightbox = ({ photos, currentIndex, onClose }) => {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  // Fonction pour passer à la photo précédente
  const handlePrev = useCallback(() => {
    setIndex(prevIndex => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  }, [photos.length]);

  // Fonction pour passer à la photo suivante
  const handleNext = useCallback(() => {
    setIndex(prevIndex => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  }, [photos.length]);

  // Gestion du clavier et désactivation du scroll
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, handlePrev, handleNext]);

// Utilisation du hook useSwipe pour la navigation tactile.
  // Un balayage vers la gauche (deltaX négatif) appelle handleNext,
  // un balayage vers la droite (deltaX positif) appelle handlePrev,
  // sauf si un zoom à deux doigts est détecté.
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipe(handleNext, handlePrev, 50);

  const filePath = `/photos/${photos[index].category}/${photos[index].url}`;
  const isVideo = photos[index].url.toLowerCase().endsWith('.mp4');

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      {/* Bouton de fermeture */}
      <button
        className="lightbox-close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <img src={closeIcon} alt="Fermer" />
      </button>
      {/* Bouton de navigation précédente */}
      <button
        className="lightbox-prev"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
      >
        <img src={leftArrowIcon} alt="Précédente" />
      </button>
      {/* L'image s'affiche avec une hauteur max de 90% du viewport */}
      <div
        className="lightbox-media-wrapper"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {isVideo ? (
          <video
            src={filePath}
            className="lightbox-media"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          />
        ) : (
          <img
            src={filePath}
            alt={`${photos[index].alt} - tatouage`}
            className="lightbox-media"
          />
        )}
      </div>

      {/* Bouton de navigation suivante */}
      <button
        className="lightbox-next"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
      >
        <img src={rightArrowIcon} alt="Suivante" />
      </button>
    </div>
  );
};

Lightbox.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Lightbox;
