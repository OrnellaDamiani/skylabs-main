import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import logo from '../Media/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <img src={logo} alt="SkyLabs Developments" className="logo" />
        <h3>SkyLabs Developments</h3>
      </div>

      <div className="footer-section">
        <h4>Confianza en tus compras</h4>
        <ul>
          <li>
            <a 
              href="https://www.argentina.gob.ar/defensadelconsumidor/ley-24240" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Términos y condiciones de compra - Ley N° 24.240 de Defensa del Consumidor
            </a>
          </li>
          <li>
            <a 
              href="/politica-de-privacidad" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Política de privacidad
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contáctanos</h4>
        <p><FaEnvelope /> fparedes@skylabs-developments.com</p>
        <p><FaPhone />+54 9 11 6005-9308</p>

        <h4>Redes sociales</h4>
        <a 
          href="https://www.linkedin.com/company/skylabs-developments" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social-icon" />
        </a>
      </div>

      <div className="footer-section">
        <h4>Información</h4>
        <ul>
          <li><a href="/terminos" target="_blank" rel="noopener noreferrer">Términos y condiciones</a></li>
          <li><a href="/privacidad" target="_blank" rel="noopener noreferrer">Cómo cuidamos tu privacidad</a></li>
          <li><a href="/accesibilidad" target="_blank" rel="noopener noreferrer">Accesibilidad</a></li>
          <li><a href="/financiero" target="_blank" rel="noopener noreferrer">Información al usuario financiero</a></li>
          <li><a href="/ayuda" target="_blank" rel="noopener noreferrer">Ayuda</a></li>
          <li><a href="https://www.argentina.gob.ar/defensadelconsumidor" target="_blank" rel="noopener noreferrer">Defensa del Consumidor</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SkyLabs Developments. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;