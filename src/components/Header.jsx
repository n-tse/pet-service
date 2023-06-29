import React from "react";
import "./css/Header.css";
import { navItems } from "../data";
import logo from "../assets/PawsitivePetCareLogoOnly-removebg-preview.png";
import logoName from "../assets/PawsitivePetCareNameCropped-removebg-preview.png";

const Header = () => {
  return (
    <header className="header">
      <div className="navbar-wrapper">
        <a href="#" className="logo-area" style={{ padding: 0 }}>
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
        {/* <div className="logo-area" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
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
        </div> */}
        <div className="navigation">
          <ul className="menu">
            {navItems.map((item) => (
              <li className="nav-item">
                <a href={item.path} style={{ padding:"0.5rem 0.25rem" }}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="action-button-container">
          <button className="action-button">Join Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
