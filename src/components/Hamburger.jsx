import React from 'react';
import './css/Hamburger.css';

const Hamburger = ({ isOpen }) => {
  return (
    <div className={isOpen ? "hamburger fries" : "hamburger"}>
      <div className="burger burger1" />
      <div className="burger burger2" />
      <div className="burger burger3" />
    </div>
  )
}

export default Hamburger