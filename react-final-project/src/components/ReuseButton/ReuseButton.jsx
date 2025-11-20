import React from "react";
import "./reuse-button.css";

const ReuseButton = ({ text, idName, onClick }) => {
  return (
    <div>
      <div className="reuse-button" id={idName} onClick={onClick}>
        {text}
      </div>
    </div>
  );
};

export default ReuseButton;
