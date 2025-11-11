import React from "react";
import "./logcard.css";
import ReuseButton from "../ReuseButton/ReuseButton";

const LogCard = ({ subject, duration, materials, notes }) => {
  return (
    <div className="main-card-div">
      <ul>
        <div id="subject-container-div">
          <p>Subject:</p>
          <li id="subject-list-item">{subject}</li>
        </div>
        <div id="activity-duration-container-div">
          <p>Activity duration:</p>
          <li id="activity-duration-list-item">{duration}</li>
        </div>
        <div id="materials-container-div">
          <p>Materials used:</p>
          <li id="materials-list-item">{materials}</li>
        </div>
        <div id="notes-container-div">
          <p>Notes:</p>
          <li id="notes-list-item">{notes}</li>
        </div>
      </ul>
      <ReuseButton idName={"delete-button"} text={"Delete Activity"} />
    </div>
  );
};

export default LogCard;
