import React from "react";
import "./reuse-button.css";

const ReuseButton = ({ text, idName }) => {
  return (
    <div>
      <div className="reuse-button" id={idName}>
        {text}
      </div>
    </div>
  );
};

export default ReuseButton;
