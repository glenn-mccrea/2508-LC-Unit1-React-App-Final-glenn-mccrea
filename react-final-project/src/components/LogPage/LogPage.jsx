import React, { useState } from "react";
import "./log-page.css";

const LogPage = ({ addCard }) => {
  const [subject, setSubject] = (useState = "");
  const [duration, setDuration] = (useState = "15");
  const [materials, setMaterials] = useState("");
  const [notes, setNotes] = (useState = "");

  return (
    <main>
      <div id="logpage-div">
        <form action="">
          <label htmlFor="school-subject">Subject: </label>
          <br />
          <select
            id="school-subject"
            name="school-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            {/* this means grab the value of what the user selected */}
            <option value="">Choose a subject</option>
            <option value="english">English/Language Arts</option>
            <option value="math">Mathematics</option>
            <option value="science">Science</option>
            <option value="social-studies">Social Studies/History</option>
            <option value="foreign-language">Foreign Language</option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="computer-science">Computer Science</option>
          </select>
          <br />
          <br />

          <label htmlFor="activity-duration">Duration: </label>
          <br />
          <select name="activity-duration" id="activity-duration">
            <option value="15">15 Minutes</option>
            <option value="20">20 Minutes</option>
            <option value="30">30 Minutes</option>
            <option value="45">45 Minutes</option>
            <option value="50">50 Minutes</option>
            <option value="60">60 Minutes</option>
            <option value="90">90 Minutes</option>
          </select>
          <br />
          <br />

          <label htmlFor="materials-input">Materials Used: </label>
          <br />
          <input
            type="text"
            id="materials-input"
            name="materials"
            placeholder="Enter materials used"
          />
          <br />
          <br />

          <label htmlFor="notes-input">Notes: </label>
          <br />
          <textarea
            id="notes-input"
            name="notes"
            placeholder="Activity notes"
            style={{ height: "100px" }}
          />
          <br />

          <button type="submit">Submit Log</button>
        </form>
      </div>
    </main>
  );
};

export default LogPage;
