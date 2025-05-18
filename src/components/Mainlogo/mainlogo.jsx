import './mainlogo.css'
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

const Mainlogo = ({ hidden }) => {
  return (
    <div className={`main-logo ${hidden ? 'hidden' : ''}`}>
      <img src={logo} alt='logo Les Aiguilles du Baron, Atelier de tatouage' className='logo' />
    </div>
  )
};

Mainlogo.propTypes = {
  hidden: PropTypes.bool
};

export default Mainlogo;
