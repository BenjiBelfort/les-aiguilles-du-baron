import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <p>Copyright &#169; 2025 - Les Aiguilles du Baron.</p>
        <p>Tous droits réservés.</p>
        <a className='footerlink' href="https://ta0.myportfolio.com/" target="_blank" rel="noopener noreferrer">Pics by Théo Merle.</a>
        <a className='footerlink' href="https://benji-belfort-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Dev by Benji Belfort.</a>
    </footer>
  );
}

export default Footer;