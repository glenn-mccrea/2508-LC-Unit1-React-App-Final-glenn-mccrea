import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div id="header-title">
        <h1>📚 Homeschool Day Tracker 🦅</h1>
      </div>
      <div id="header-nav">
        <nav id="header-nav-button-container">
          <a href="" class="button-div">
            Home
          </a>
          <a href="" class="button-div">
            Log Now
          </a>
          <a href="" class="button-div">
            Log Viewer
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
