import React from "react";
import "./css/Hero.css";
import MollyPhoto from "../assets/MollyPhoto.jpg";
import { BsFillHeartFill } from "react-icons/bs";
import { scrollToSection } from "../utils/navigation";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h2 className="headline">
              <span
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-delay="500"
                data-aos-once="true"
              >
                Caring for Pets,&nbsp;
              </span>
              <span
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1600"
                data-aos-once="true"
                className="highlight-text"
              >
                Creating Smiles
              </span>
            </h2>
            <p className="text">
              With a passion for pets and years of experience, we are here to
              make a difference in your pet's life. From grooming to walking,
              and everything in between, we offer a wide range of services
              designed to keep your pet healthy, happy, and thriving.
            </p>
            <div className="hero-btns">
              <button
                className="get-started"
                onClick={() => scrollToSection("pricing")}
              >
                Get Started
              </button>
              <button
                className="view-testimonials"
                onClick={() => scrollToSection("testimonials")}
              >
                View Testimonials
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="hero-img-wrapper">
              <img src={MollyPhoto} alt="Photo of my dog Molly" id="heart-icon-trigger"/>
              <div
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                data-aos-delay="3000"
                data-aos-once="true"
                data-aos-anchor="heart-icon-trigger"
              >
                <BsFillHeartFill className="heart-icon zoom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
