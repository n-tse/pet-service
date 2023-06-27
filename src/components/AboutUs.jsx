import React, { useMemo } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/AboutUs.css";
import photo1 from "../assets/manuel-meza-KvKop_a_EXw-unsplash.jpg";
import photo2 from "../assets/berkay-gumustekin-ngqyo2AYYnE-unsplash.jpg";
import photo3 from "../assets/humberto-arellano-N_G2Sqdy9QY-unsplash.jpg";
import photo4 from "../assets/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg";
import photo5 from "../assets/matt-nelson-aI3EBLvcyu4-unsplash.jpg";
import photo6 from "../assets/rudy-jr-KqxEx_Mf-UI-unsplash.jpg";
import photo7 from "../assets/alexander-grey-W5D__7paUa0-unsplash.jpg";

const AboutUs = () => {
  const images = useMemo(
    () => [photo1, photo2, photo3, photo4, photo5, photo6, photo7],
    []
  );
  return (
    <div className="container">
      <div className="about-us-wrapper">
        <div className="about-us-content">
          <h2 className="headline">About Us</h2>
          <p className="text">
            At <span className="highlight-text">Pawsitive Pet Care</span>, we
            believe that every pet deserves to be showered with love, care, and
            attention. Our dedicated team of professionals is committed to
            providing exceptional pet services that cater to your furry friend's
            unique needs.
          </p>
          <br></br>
          <p className="text">
            What sets us apart is our comprehensive range of pet services
            designed to cater to your pet's unique needs. Whether your furry
            companion requires regular grooming sessions, daily walks,
            stimulating playtime, or specialized care, we have you covered. Our
            services are tailored to enhance their overall health, happiness,
            and quality of life.
          </p>
          <br></br>
          <p className="text">
            Contact us today to learn more about our services or to schedule a
            consultation. We look forward to meeting you and your beloved pets!
          </p>
        </div>
      </div>
      <div className="carousel-container">
        <Carousel useKeyboardArrows={true} width="40vw" infiniteLoop={true}>
          {images.map((image, idx) => (
            <div key={idx}>
              <img src={image} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUs;
