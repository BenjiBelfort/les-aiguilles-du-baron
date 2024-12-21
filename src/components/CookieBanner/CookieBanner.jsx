import { useState, useEffect } from 'react';
import './cookiebanner.css';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true'); // Assurez-vous que la valeur est une chaîne
    setShowBanner(false);
    window.location.reload(); // Recharge la page pour activer le script
  };

  const refuseCookies = () => {
    localStorage.setItem('cookieConsent', 'false'); // Vous pouvez enregistrer le refus si besoin
    setShowBanner(false); // Masque la bannière
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>Nous utilisons des cookies pour améliorer votre expérience.{' '}
        <a href="/policy">En savoir plus</a>
      </p>
      <button onClick={acceptCookies} className='yes-btn'>Ok</button>
      <button onClick={refuseCookies} className='no-btn'>Refuser</button>
    </div>
  );
};

export default CookieBanner;
