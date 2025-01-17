import React from 'react';
import './Navbar.css'; // Aquí puedes agregar tus estilos CSS
import logo from '../Media/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <div className='logo-container' onClick={()=>navegate(`/`)}>
                <img src={logo} alt="Logo" className="logo" />
                <a href="/" className='sky-text'>Sky</a> <a className='labs-text'>Labs</a>
                <a className='developments-text'>Developments</a>
            </div>
        
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/aboutus">About us</a></li>
        <li><a href="/servicios">Features</a></li>
        <li><a href="/contacto">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

