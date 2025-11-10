import React from "react";
import "./logcard.css";
import ReuseButton from "../ReuseButton/ReuseButton";

const LogCard = () => {
  return (
    <div className="main-card-div">
      <ul>
        <div id="subject-container-div">
          <p>Subject:</p>
          <li id="subject-list-item">placeholder</li>
        </div>
        <div id="activity-duration-container-div">
          <p>Activity duration:</p>
          <li id="activity-duration-list-item">placeholder</li>
        </div>
        <div id="materials-container-div">
          <p>Materials used:</p>
          <li id="materials-list-item">placeholder placeholder placeholder</li>
        </div>
        <div id="notes-container-div">
          <p>Notes:</p>
          <li id="notes-list-item">
            placeholder placeholder placeholder placeholder placeholder
            placeholder placeholder placeholder placeholder placeholder
            placeholder placeholder placeholder placeholder placeholder
            placeholder placeholder placeholder
          </li>
        </div>
      </ul>
      <ReuseButton idName={"delete-button"} text={"Delete Activity"} />
    </div>
  );
};

export default LogCard;
