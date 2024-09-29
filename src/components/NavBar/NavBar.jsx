import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoHome from '../../assets/logoHome.jpeg';
import Menu from '../../assets/bx-menu.svg'
import './NavBar.scss'

export default function NavBar() {
  // Estado para controlar la visibilidad del menú en móviles
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <>
      <nav className='navBar'>
        <Link className='navBar__home' to="/"><img src={LogoHome} alt='homerun' /></Link>
        <div className='navBar__menu' onClick={toggleMenu}>
          <img src={Menu}></img>
        </div>
        <div className={`navBar__options ${isMenuVisible ? 'show' : ''}`}>
          <div className="navBar__close" onClick={toggleMenu}>x</div>
          <Link className="navBar__item" to="create-user" onClick={toggleMenu}>Registrate</Link>
          <Link className="navBar__item" to="/login" onClick={toggleMenu}>Log In</Link>
        </div>
      </nav>
    </>
  )
}

