import React from "react";
import "./css/SiteMap.css";
import logo from "../assets/PawsitivePetCareNameCropped-removebg-preview.png";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialLinkedin,
} from "react-icons/ti";

import { BsTelephoneFill, BsFillPinMapFill, BsClockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const SiteMap = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-wrapper">
        <div className="footer-column footer-logo-column">
          <div className="logo-container">
            <img
              src={logo}
              alt="Pawsitive Pet Care company logo"
              className="logo"
            />
          </div>
          <div className="social-icons-group">
            <TiSocialTwitter className="social-icon" />
            <TiSocialFacebook className="social-icon facebook-icon" />
            <TiSocialInstagram className="social-icon" />
            <TiSocialYoutube className="social-icon" />
            <TiSocialLinkedin className="social-icon" />
          </div>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">Company</h4>
          <ul className="footer-column-links">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Mission & Values</a>
            </li>
            <li>
              <a href="/">Our Team</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">Quick Links</h4>
          <ul className="footer-column-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">Resources</h4>
          <ul className="footer-column-links">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pet Care Tips</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">Contact Us</h4>
          <ul className="footer-contact-info">
            <div className="footer-contact-info-row">
              <BsTelephoneFill className="footer-contact-info-icon" />
              +1 (555) 123-4567
            </div>
            <div className="footer-contact-info-row">
              <MdEmail className="footer-contact-info-icon" />
              support@pawsitivepets.com
            </div>
            <div className="footer-contact-info-row">
              <BsFillPinMapFill className="footer-contact-info-icon" />
              123 Paw Avenue, Petropolis, CA 98765
            </div>
            <div className="footer-contact-info-row">
              <BsClockFill className="footer-contact-info-icon" />
              Mon-Sun, 6:00AM to 9:00PM
            </div>
          </ul>
        </div>
      </div>
      <p className="copyright">&copy; 2023 - Built by Nicholas Tse</p>
    </footer>
  );
};

export default SiteMap;
