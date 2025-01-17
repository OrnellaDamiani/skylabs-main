import React from "react";
import "./Features.css"
import { FaPlane, FaDatabase, FaCog, FaCode } from "react-icons/fa";

const Features = () => {
  return (
    <div className="icons-container">
      <div className="icon-circle">
        <FaPlane className="icon purple" />
        <p className="hola-text">Hola</p>
      </div>
      <div className="icon-circle">
        <FaDatabase className="icon blue" />
      </div>
      <div className="icon-circle">
        <FaCog className="icon purple" />
      </div>
      <div className="icon-circle">
        <FaCode className="icon blue" />
      </div>
    </div>
  );
};

export default Features;