import React from "react";
import "./css/Pricing.css";
import { BsCheck2Circle, BsXCircle } from "react-icons/bs";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="pricing-content">
          <div className="pricing-header">
            <h2 className="headline">Pricing Plans</h2>
            <p className="text">
              We believe that pet care should be{" "}
              <span className="highlight-text">convenient</span> and{" "}
              <span className="highlight-text">stress-free</span> for pet
              owners. With our flexible scheduling options and experienced,
              attentive staff, we aim to make your life easier while giving your
              pet the attention and care they deserve.
            </p>
            <br></br>
            <p className="text">
              All plans include:{" "}
              <b>Dog Walking, Pet Sitting, Grooming, and Training</b>
            </p>
          </div>
          <div className="pricing-cards-container">
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h2 className="plan-name">
                  <span style={{ color: "#606060" }}>Free Trial</span>
                </h2>
                <div className="sub-header">Try our services for 30 days</div>
                <h2 className="plan-cost">$0</h2>
              </div>
              <div className="services-provided-list">
                <ul style={{ listStyle: "none" }}>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    100% Satisfaction Guarantee
                  </li>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    24/7 Customer Support
                  </li>
                  <li className="services-provided-list-item">
                    <BsXCircle className="service-not-included-icon" />
                    Member exclusive supply discounts
                  </li>
                  <li className="services-provided-list-item">
                    <BsXCircle className="service-not-included-icon" />
                    Supply Delivery
                  </li>
                  <li className="services-provided-list-item">
                    <BsXCircle className="service-not-included-icon" />
                    Health Checkup
                  </li>
                  <li className="services-provided-list-item">
                    <BsXCircle className="service-not-included-icon" />
                    Boarding & Daycare
                  </li>
                  <li className="services-provided-list-item">
                    <BsXCircle className="service-not-included-icon" />
                    Transportation
                  </li>
                </ul>
              </div>
              <div className="pricing-card-btn-container">
                <button className="pricing-card-btn">Begin 30-Day Trial</button>
              </div>
            </div>
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h2 className="plan-name">
                  Basic <span style={{ color: "#606060" }}>Care</span>
                </h2>
                <div className="sub-header">Up to 2 sessions of care</div>
                <h2 className="plan-cost">
                  $40<span style={{ fontSize: "0.8rem" }}>/month</span>
                </h2>
              </div>
              <div className="services-provided-list">
                <ul style={{ listStyle: "none" }}>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    100% Satisfaction Guarantee
                  </li>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    24/7 Customer Support
                  </li>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    Member exclusive supply discounts
                  </li>
                  <li className="services-provided-list-item">
                    <BsXCircle className="service-not-included-icon" />
                    Supply Delivery
                  </li>
                  <li className="services-provided-list-item">
                    <BsXCircle className="service-not-included-icon" />
                    Health Checkup
                  </li>
                  <li className="services-provided-list-item">
                    <BsXCircle className="service-not-included-icon" />
                    Boarding & Daycare
                  </li>
                  <li className="services-provided-list-item">
                    <BsXCircle className="service-not-included-icon" />
                    Transportation
                  </li>
                </ul>
              </div>
              <div className="pricing-card-btn-container">
                <button className="pricing-card-btn">Subscribe Now</button>
              </div>
            </div>
            <div className="pricing-card popular-plan">
              <div className="pricing-card-header">
                <h2 className="plan-name">
                  Standard <span style={{ color: "#606060" }}>Care</span>
                </h2>
                <div className="sub-header">Up to 5 sessions of care</div>
                <h2 className="plan-cost">
                  $80<span style={{ fontSize: "0.8rem" }}>/month</span>
                </h2>
                <div className="popular-banner">Most Popular</div>
              </div>
              <div className="services-provided-list">
                <ul style={{ listStyle: "none" }}>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    100% Satisfaction Guarantee
                  </li>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    24/7 Customer Support
                  </li>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    Member exclusive supply discounts
                  </li>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    Supply Delivery
                  </li>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    Health Checkup
                  </li>
                  <li className="services-provided-list-item">
                    <BsXCircle className="service-not-included-icon" />
                    Boarding & Daycare
                  </li>
                  <li className="services-provided-list-item">
                    <BsXCircle className="service-not-included-icon" />
                    Transportation
                  </li>
                </ul>
              </div>
              <div className="pricing-card-btn-container">
                <button className="pricing-card-btn">Subscribe Now</button>
              </div>
            </div>
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h2 className="plan-name">
                  Premium <span style={{ color: "#606060" }}>Care</span>
                </h2>
                <div className="sub-header">Up to 12 sessions of care</div>
                <h2 className="plan-cost">
                  $140<span style={{ fontSize: "0.8rem" }}>/month</span>
                </h2>
              </div>
              <div className="services-provided-list">
                <ul style={{ listStyle: "none" }}>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    100% Satisfaction Guarantee
                  </li>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    24/7 Customer Support
                  </li>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    Member exclusive supply discounts
                  </li>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    Supply Delivery
                  </li>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    Health Checkup
                  </li>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    Boarding & Daycare
                  </li>
                  <li className="services-provided-list-item">
                    <BsCheck2Circle className="service-included-icon" />
                    Transportation
                  </li>
                </ul>
              </div>
              <div className="pricing-card-btn-container">
                <button className="pricing-card-btn">Subscribe Now</button>
              </div>
            </div>
          </div>
          {/* <p id="footer">
          Questions about pricing? Email us at{"\u00A0"}
          <a href="" style={{ textDecoration: "underline", color: "blue" }}>
            support@pawsitivepets.com
          </a>
        </p> */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
