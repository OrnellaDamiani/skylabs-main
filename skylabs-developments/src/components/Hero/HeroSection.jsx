import React from 'react';
import './HeroSection.css'; // Aquí van los estilos de la hero section

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">SkyLabs Developments</h1>
        <p className="hero-description">
        Imagination is our only limitation. Development is agile. Creation is art.
        </p>
        <a className="btn-primary">Features</a>
      </div>
    </section>
  );
};

export default HeroSection;