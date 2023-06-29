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
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-delay="1500"
              data-aos-once="true"
              data-aos-anchor="#services-trigger"
            />
            <div className="services-graphic">
              <div
                className="service"
                data-aos="zoom-out"
                data-aos-duration="1500"
                data-aos-delay="750"
                // data-aos-anchor="#services-trigger"
                data-aos-once="true"
                id="services-trigger"
              >
                <h4>Dog Walking</h4>
                <IoFootstepsSharp className="service-icon" />
              </div>
              <div
                className="service"
                data-aos="zoom-out"
                data-aos-duration="1500"
                data-aos-delay="750"
                data-aos-anchor="#services-trigger"
                data-aos-once="true"
              >
                <h4>Pet Sitting</h4>
                <FaDog className="service-icon" />
              </div>
              <div
                className="service"
                data-aos="zoom-out"
                data-aos-duration="1500"
                data-aos-delay="750"
                data-aos-anchor="#services-trigger"
                data-aos-once="true"
              >
                <h4>Grooming</h4>
                <GiComb className="service-icon" />
              </div>
              <div
                className="service"
                data-aos="zoom-out"
                data-aos-duration="1500"
                data-aos-delay="750"
                data-aos-anchor="#services-trigger"
                data-aos-once="true"
              >
                <h4>Training</h4>
                <MdSports className="service-icon" />
              </div>
              <div
                className="service"
                data-aos="zoom-out"
                data-aos-duration="1500"
                data-aos-delay="750"
                data-aos-anchor="#services-trigger"
                data-aos-once="true"
              >
                <h4>Boarding & Daycare</h4>
                <LuHotel className="service-icon" />
              </div>
              <div
                className="service"
                data-aos="zoom-out"
                data-aos-duration="1500"
                data-aos-delay="750"
                data-aos-anchor="#services-trigger"
                data-aos-once="true"
              >
                <h4>Tranportation</h4>
                <FaCarSide className="service-icon" />
              </div>
              <div
                className="service"
                data-aos="zoom-out"
                data-aos-duration="1500"
                data-aos-delay="750"
                data-aos-anchor="#services-trigger"
                data-aos-once="true"
              >
                <h4>Supply Delivery</h4>
                <BiSolidBone className="service-icon" />
              </div>
              <div
                className="service"
                data-aos="zoom-out"
                data-aos-duration="1500"
                data-aos-delay="750"
                data-aos-anchor="#services-trigger"
                data-aos-once="true"
              >
                <h4>Health Checkup</h4>
                <MdHealthAndSafety className="service-icon" />
              </div>
            </div>
          </div>
        </div>
        {/* <div id="services-trigger" /> */}
      </div>
    </section>
  );
};

export default Services;
