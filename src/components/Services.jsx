import React from "react";
import "./css/Services.css";
import { FaCarSide, FaDog } from "react-icons/fa";
import { IoFootstepsSharp } from "react-icons/io5";
import { GiComb } from "react-icons/gi";
import { LuHotel } from "react-icons/lu";
import { BiSolidBone } from "react-icons/bi";
import { MdHealthAndSafety, MdSports } from "react-icons/md";
import SunGraphic from "../assets/SunGraphic-removebg-preview.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services-wrapper">
          <div className="services-content">
            <h2 className="headline">Services</h2>
            <img
              src={SunGraphic}
              className="services-bg-graphic"
              alt="Yellow sun graphic"
            />
            <div className="services-graphic">
              <div className="service">
                <h4>Dog Walking</h4>
                <IoFootstepsSharp className="service-icon" />
              </div>
              <div className="service">
                <h4>Pet Sitting</h4>
                <FaDog className="service-icon" />
              </div>
              <div className="service">
                <h4>Grooming</h4>
                <GiComb className="service-icon" />
              </div>
              <div className="service">
                <h4>Training</h4>
                <MdSports className="service-icon" />
              </div>
              <div className="service">
                <h4>Boarding & Daycare</h4>
                <LuHotel className="service-icon" />
              </div>
              <div className="service">
                <h4>Tranportation</h4>
                <FaCarSide className="service-icon" />
              </div>
              <div className="service">
                <h4>Supply Delivery</h4>
                <BiSolidBone className="service-icon" />
              </div>
              <div className="service">
                <h4>Health Checkup</h4>
                <MdHealthAndSafety className="service-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
