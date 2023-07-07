import React, { useRef } from "react";
import "./css/Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCards, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "./css/Testimonials.css";
import TestimonialImg1 from "../assets/tamas-pap-Qdt8f7Tcle0-unsplash.jpg";
import TestimonialImg2 from "../assets/wade-austin-ellis-FtuJIuBbUhI-unsplash.jpg";
import TestimonialImg3 from "../assets/mel-elias-2_KjpNXFl5M-unsplash.jpg";

SwiperCore.use([EffectCards, Navigation]);

const Testimonials = () => {
  const swiperRef = useRef(null);

  const handleSlideClick = (event) => {
    const slideWidth = event.currentTarget.offsetWidth;
    const clickPositionX = event.pageX - event.currentTarget.getBoundingClientRect().left;
    const clickThreshold = slideWidth / 2;

    if (clickPositionX < clickThreshold && swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    } else if (clickPositionX >= clickThreshold && swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="headline">Testimonials</h2>
        </div>
        <div className="swipers-container">
          <Swiper
            effect="cards"
            grabCursor={true}
            loop={true}
            modules={[EffectCards, Navigation]}
            className="mySwiper"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            <SwiperSlide>
              <div className="slide-item" onClick={handleSlideClick}>
                <div className="slide-img">
                  <img src={TestimonialImg2} alt="" />
                </div>
                <h4>Emily Thompson</h4>
                <p>
                  I couldn't be happier with the outstanding service provided by
                  Pawsitive. They truly treat your pet like family. My dog, Max,
                  adores his time there, and I have peace of mind knowing he's
                  in good hands. Thank you, Team Pawsitive!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item" onClick={handleSlideClick}>
                <div className="slide-img">
                  <img src={TestimonialImg1} alt="" />
                </div>
                <h4>Sarah McDougall</h4>
                <p>
                  I am incredibly impressed by the level of care, compassion,
                  and companionship that Pawsitive provides! The journals and
                  photos and notes are wonderful to read. I can tell that
                  Pawsitive hires a wonderful team of employees!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-item" onClick={handleSlideClick}>
                <div className="slide-img">
                  <img src={TestimonialImg3} alt="" />
                </div>
                <h4>Jessica Davis</h4>
                <p>
                  From the moment I started the free trial, I knew my pet was in
                  the best care. The team, led by Nick, is incredibly
                  knowledgeable, compassionate, and friendly. They provide a
                  safe and nurturing environment that my cat, Luna, adores. I
                  wouldn't trust anyone else with her well-being!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
