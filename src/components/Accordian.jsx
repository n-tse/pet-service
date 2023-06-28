import React, { useState } from "react";
import "./css/Accordian.css";

const Accordian = ({ header, content }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="accordian-item">
      <div
        className="accordian-header"
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <div>{header}</div>
        <div>{isOpened ? "-" : "+"}</div>
      </div>
      {isOpened && <div className="accordian-content">{content}</div>}
    </div>
  );
};

export default Accordian;
