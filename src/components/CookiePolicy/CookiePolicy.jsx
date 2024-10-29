import { useNavigate } from 'react-router-dom';
import './cookiepolicy.css';

const CookiePolicy = () => {
  const navigate = useNavigate();

  // Fonction pour gérer le clic sur le bouton OK
  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');  // Enregistre le consentement dans le localStorage
    navigate('/');  // Redirige vers la route principale
  };

  return (
    <div className="cookie-policy">
      <h3>Politique de Cookies</h3>
      <h4>1. Identification de l’éditeur du site</h4>
      <p>Le présent site <span>Les aiguilles du Baron</span> est édité par <span>Les aiguilles du Baron</span>, dont le siège social est situé au 5 rue du Général Roussel à BELFORT, enregistré sous le numéro [SIRET ou autre numéro d’enregistrement applicable]. Pour toute question, vous pouvez nous contacter à l’adresse suivante : lesaiguillesdubaron@gmail.com</p>
      <br />
      <br />
      <h4>2. Qu’est-ce qu’un cookie ?</h4>
      <p>Un cookie est un petit fichier texte déposé sur le terminal de l’utilisateur lors de la visite d’un site web. Il permet de conserver des informations sur la navigation de l’utilisateur pour optimiser son expérience en ligne.</p>
      <br />
      <br />
      <h4>3. Types de cookies utilisés</h4>
      <p>Nous n’utilisons qu’un seul type de cookie sur notre site :</p>
      <p>
        Cookies de mesure d’audience (Google Analytics) : Ces cookies collectent des informations anonymes sur la manière dont les utilisateurs interagissent avec notre site. Ils nous permettent de mieux comprendre la fréquentation de nos pages et d’améliorer les contenus en fonction des préférences des utilisateurs.</p>
      <br />
      <br />
      <h4>4. Consentement de l’utilisateur</h4>
      <p>Lors de votre première visite, un bandeau d’information vous informe de l’utilisation de Google Analytics et vous invite à consentir à l’installation de ces cookies. En acceptant, vous autorisez leur collecte pour l’analyse de l’audience. Si vous refusez, aucun cookie de mesure d’audience ne sera installé.</p>
      <br />
      <br />
      <h4>5. Retrait et modification du consentement</h4>
      <p>Vous pouvez retirer votre consentement à tout moment en modifiant les paramètres de votre navigateur. Il est également possible de désactiver Google Analytics en installant un module complémentaire pour votre navigateur, disponible ici :</p>
      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank">https://tools.google.com/dlpage/gaoptout.</a>
      <br />
      <br />
      <h4>6. Durée de conservation des cookies</h4>
      <p>Les cookies Google Analytics sont conservés pendant une durée maximale de 13 mois. Passé ce délai, les données sont automatiquement supprimées.</p>
      <br />
      <br />
      <h4>7. Droits des utilisateurs</h4>
      <p>Conformément au RGPD, vous disposez de droits d’accès, de rectification, de suppression et d’opposition concernant vos données personnelles. Pour exercer ces droits, contactez-nous à lesaiguillesdubaron@gmail.com.</p>
      <br />
      <br />
      <h4>8. Modifications de la politique des cookies</h4>
      <p>Nous nous réservons le droit de modifier cette politique à tout moment. La date de dernière mise à jour figure en bas de cette page. Nous vous invitons à la consulter régulièrement.</p>
      <br />
      <br />
      <p>
      Dernière mise à jour : octobre 2024
      </p>
      {/* Ajouter plus de détails sur votre politique de cookies ici */}
      
      {/* Bouton OK pour valider */}
      <button className="accept-cookies-btn" onClick={handleAcceptCookies}>
        OK
      </button>
    </div>
  );
};

export default CookiePolicy;
