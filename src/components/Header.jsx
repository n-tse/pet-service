import React, { useState } from "react";
import "./css/Header.css";
import { navItems } from "../data";
import logo from "../assets/PawsitivePetCareLogoOnly-removebg-preview.png";
import logoName from "../assets/PawsitivePetCareNameCropped-removebg-preview.png";
import Hamburger from "./Hamburger";
import { scrollToSection } from "../utils/navigation";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (sectionName) => {
    scrollToSection(sectionName);
    setShowMenu(!showMenu);
  }

  return (
    <header className="header">
      <div className="navbar-wrapper">
        <a href="#" className="logo-area" style={{ padding: 0 }} onClick={() => setShowMenu(false)}>
          <img
            src={logo}
            alt="Pawsitive Pet Care Logo"
            style={{ width: 70, height: 70 }}
          />
          <img
            src={logoName}
            alt="Pawsitive Pet Care Logo"
            style={{ width: 120, height: 50 }}
          />
        </a>
        <div className="navigation">
          <ul className="menu">
            {navItems.map((item) => (
              <li className="nav-item">
                <a href={item.path} style={{ padding: "0.5rem 0.25rem" }}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="action-button-container">
            <button className="action-button" onClick={() => handleClick("pricing")}>Join Now</button>
          </div>
        </div>
        <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
          <Hamburger isOpen={showMenu}/>
        </div>
      </div>
      {showMenu && (
        <div className="hamburger-navigation">
          <ul className="menu">
            {navItems.map((item) => (
              <li className="nav-item" onClick={() => setShowMenu(false)}>
                <a href={item.path} style={{ padding: "0.5rem 0.25rem" }}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="action-button-container">
            <button className="action-button" onClick={() => handleClick("pricing")}>Join Now</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
