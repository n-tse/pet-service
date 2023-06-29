import React from "react";
import "./css/Hero.css";
import MollyPhoto from "../assets/MollyPhoto.jpg";
import { BsFillHeartFill } from "react-icons/bs";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h2 className="headline">Caring for Pets, Creating Smiles</h2>
            <p className="text">
              With a passion for pets and years of experience, we are here to
              make a difference in your pet's life. From grooming to walking,
              and everything in between, we offer a wide range of services
              designed to keep your pet healthy, happy, and thriving.
            </p>
            <div className="hero-btns">
              <button className="get-started">Get Started</button>
              <button className="view-testimonials">View Testimonials</button>
            </div>
          </div>
          <div className="hero-img">
            <div className="hero-img-wrapper">
                <img src={MollyPhoto} alt="Photo of my dog Molly" />
                <BsFillHeartFill className="heart-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
