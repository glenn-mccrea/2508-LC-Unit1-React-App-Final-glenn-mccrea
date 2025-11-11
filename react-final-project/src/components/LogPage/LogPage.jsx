import React, { useState } from "react";
import "./log-page.css";

const LogPage = ({ addCard }) => {
  const [subject, setSubject] =
    useState(""); /* define the useState for all items */
  const [duration, setDuration] = useState("15");
  const [materials, setMaterials] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const newCard = {
      id: Date.now(),
      subject: subject,
      duration: duration,
      materials: materials,
      notes: notes,
    };

    addCard(newCard); /* Passes the object up to my app.jsx --  */

    /* reset values: */
    setSubject("");
    setDuration("15");
    setMaterials("");
    setNotes("");
  };

  return (
    <main>
      <div id="logpage-div">
        <form onSubmit={handleSubmit}>
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
            <option value="English">English/Language Arts</option>
            <option value="Math">Mathematics</option>
            <option value="Science">Science</option>
            <option value="Social-Studies">Social Studies/History</option>
            <option value="Foreign-Language">Foreign Language</option>
            <option value="Art">Art</option>
            <option value="Music">Music</option>
            <option value="Computer-Science">Computer Science</option>
          </select>
          <br />
          <br />

          <label htmlFor="activity-duration">Duration: </label>
          <br />
          <select
            name="activity-duration"
            id="activity-duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
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
            value={materials}
            onChange={(e) => setMaterials(e.target.value)}
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
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <br />

          <button type="submit">Submit Log</button>
        </form>
      </div>
    </main>
  );
};

export default LogPage;
