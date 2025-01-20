import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <li>
        <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
        <NavLink to="./AboutUs" activeClassName="active">
            About us
          </NavLink>
        </li>
        <li>
        <NavLink to="./Features" activeClassName="active">
            Features
          </NavLink>
        </li>
        <li>
        <NavLink to="./ContactForm" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

