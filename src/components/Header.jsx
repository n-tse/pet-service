import React from "react";
import "./css/Header.css";
import logo from "../assets/PawsitivePetCareLogoOnly-removebg-preview.png";
import logoName from "../assets/PawsitivePetCareNameCropped-removebg-preview.png";

const Header = () => {
  const navItems = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/",
      name: "About Us",
    },
    {
      path: "/",
      name: "Services",
    },
    {
      path: "/",
      name: "Pricing",
    },
    {
      path: "/",
      name: "Testimonials",
    },
    {
      path: "/",
      name: "FAQ",
    },
    {
      path: "/",
      name: "Contact Us",
    },
  ];

  return (
    <header className="header">
      <div className="navbar-wrapper">
        <div className="logo-area">
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
        </div>
        <div className="navigation">
          <ul className="menu">
            {navItems.map((item) => (
              <li className="nav-item">
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="action-button-container">
          <button className="action-button">Request a Quote</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
