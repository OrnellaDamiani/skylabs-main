import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import AboutUs from './components/AboutUs/AboutUs';
import Features from './components/Features/Features';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <AboutUs/>
      <Features/>
      <ContactForm/>

    </div>
  );
}


export default App;
