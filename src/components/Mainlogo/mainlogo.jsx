import './mainlogo.css'
import logo from '../../assets/logo.png';


const Mainlogo = () => {
  return (
    <div className='main-logo'>
      <img src={logo} alt='logo Les Aiguilles du Baron, Atelier de tatouage' className='logo' />
    </div>
  )
}

export default Mainlogo;