import React from "react";
import "./header.css";
import ReuseButton from "../ReuseButton/ReuseButton";

const Header = () => {
  return (
    <header>
      <div id="header-title">
        <h1>📚 Homeschool Day Tracker 🦅</h1>
      </div>
      <div id="header-nav">
        <nav id="header-nav-button-container">
          <ReuseButton idName={"mobile-menu"} text={"Menu"} />
          <div id="expanded-menu-items">
            <a href="" class="button-div">
              Home
            </a>
            <a href="" class="button-div">
              Log Now
            </a>
            <a href="" class="button-div">
              Log Viewer
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
