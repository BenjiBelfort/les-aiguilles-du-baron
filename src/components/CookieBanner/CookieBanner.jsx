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
    localStorage.setItem('cookieConsent', true);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>Nous utilisons des cookies pour améliorer votre expérience.{' '}
        <a href="/policy">En savoir plus</a>
      </p>
      <button onClick={acceptCookies}>Ok</button>
    </div>
  );
};

export default CookieBanner;