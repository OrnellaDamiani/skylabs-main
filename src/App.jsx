import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import AboutUs from './components/AboutUs/AboutUs';
import Features from './components/Features/Features';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="./components/AboutUs/AboutUs" element={<AboutUs/>} />
        <Route path="./components/Features/Features" element={<Features/>} />
        <Route path="./components/ContactForm" element={<ContactForm/>} />
      </Routes>
      </BrowserRouter>
      <HeroSection/>
      <Footer/>

    </div>
  );
}


export default App;
