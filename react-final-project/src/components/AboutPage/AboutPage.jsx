import "./AboutPage.css";
import React from "react";
import background from "./about-page-background.jpg";

const AboutPage = () => {
  return (
    <main>
      <div id="aboutpage-div" style={{ backgroundImage: `url(${background})` }}>
        <section id="aboutpage-text-container">
          <h2>
            Homeschool Day Tracker was created to serve teachers like you...
          </h2>
          <h3>
            In 2025 the idea for HSDT was born out of a desire to have a simple
            web app that would help Teachers track school day learning and
            activities in a clean, easy to use way.
          </h3>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
