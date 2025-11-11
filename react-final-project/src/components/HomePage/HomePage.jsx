import React from "react";
import "./homepage.css";
import background from "./homepage-image.jpg";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <main>
      <div id="homepage-div" style={{ backgroundImage: `url(${background})` }}>
        <section id="homepage-text-container">
          <h2>Welcome to Homeschool Day Tracker!</h2>
          <p>
            We exist to help Teachers track school day learning and activities
            in a clean, easy to use log.
          </p>
          <br />
          <h3>
            To get started,
            <Link to="/viewer" className="button-div">
              Log Viewer
            </Link>
          </h3>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
