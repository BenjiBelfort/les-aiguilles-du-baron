import { useState, useCallback } from 'react';

const useSwipe = (onSwipeLeft, onSwipeRight, swipeThreshold = 50) => {
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isZooming, setIsZooming] = useState(false);

  const handleTouchStart = useCallback((e) => {
    if (e.touches.length > 1) {
      // Si plus d'un doigt est détecté, on considère que l'utilisateur effectue un zoom
      setIsZooming(true);
    } else {
      setIsZooming(false);
      setTouchStartX(e.touches[0].clientX);
    }
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (e.touches.length > 1) {
      // Si on détecte à nouveau plusieurs doigts, on reste en mode zoom
      setIsZooming(true);
    } else {
      setTouchEndX(e.touches[0].clientX);
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    // Si un zoom est en cours, on ne change pas d'image
    if (!isZooming && touchStartX !== null && touchEndX !== null) {
      const deltaX = touchEndX - touchStartX;
      if (deltaX < -swipeThreshold) {
        onSwipeLeft && onSwipeLeft();
      } else if (deltaX > swipeThreshold) {
        onSwipeRight && onSwipeRight();
      }
    }
    // Réinitialisation des états
    setTouchStartX(null);
    setTouchEndX(null);
    setIsZooming(false);
  }, [isZooming, touchStartX, touchEndX, swipeThreshold, onSwipeLeft, onSwipeRight]);

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    isZooming, // Optionnel si vous souhaitez connaître cet état dans le composant
  };
};

export default useSwipe;
