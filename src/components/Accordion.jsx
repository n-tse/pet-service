import React, { useState } from "react";
import "./css/Accordion.css";
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const Accordion = ({ header, content }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="accoridion-item">
      <div
        className="accoridion-header"
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <div>{header}</div>
        <div>{isOpened ? <MdExpandLess /> : <MdExpandMore />}</div>
      </div>
      {isOpened && <div className="accoridion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
