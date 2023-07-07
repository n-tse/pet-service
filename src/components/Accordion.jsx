import React, { useState } from "react";
import "./css/Accordion.css";
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const Accordion = ({ header, content }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="accordion-item">
      <div
        className="accordion-header"
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <div>{header}</div>
        <div>{isOpened ? <MdExpandLess /> : <MdExpandMore />}</div>
      </div>
      {isOpened && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
