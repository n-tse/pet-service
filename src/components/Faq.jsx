import React, { useState } from "react";
import "./css/Faq.css";
import Accordion from "./Accordion";
import { accordionData } from "../data.js";
// import { PiCaretDoubleDown, PiCaretDoubleUp } from "react-icons/pi";

const Faq = () => {
  const [showAll, setShowAll] = useState(false);

  const initialDisplayQuantity = 4;

  const displayItemCount = showAll
    ? accordionData.length
    : initialDisplayQuantity;

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-wrapper">
          <h2 className="headline">FAQs</h2>
          <div className="faq-content-wrapper">
            {accordionData.slice(0, displayItemCount).map((item, idx) => (
              <Accordion
                header={item.header}
                content={item.content}
                key={idx}
              />
            ))}
          </div>
          {accordionData.length > initialDisplayQuantity && (
            <div className="toggle-btn-wrapper">
              {showAll ? (
                <button
                  className="toggle-btn"
                  onClick={() => setShowAll((prev) => !prev)}
                >
                  See Less
                  {/* <PiCaretDoubleUp style={{ marginLeft: 5 }} /> */}
                </button>
              ) : (
                <button
                  className="toggle-btn"
                  onClick={() => setShowAll((prev) => !prev)}
                >
                  See More
                  {/* <PiCaretDoubleDown style={{ marginLeft: 5 }} /> */}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
