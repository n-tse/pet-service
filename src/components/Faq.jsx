import React from "react";
import "./css/Faq.css";
import Accordian from "./Accordian";
import { accordionData } from '../data.js';

const Faq = () => {
  return (
    <div className="container">
      <div className="faq-wrapper">
        <h2 className="headline">FAQs</h2>
        <div className="faq-content-wrapper">
          {accordionData.map((item) => (
            <Accordian header={item.header} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
