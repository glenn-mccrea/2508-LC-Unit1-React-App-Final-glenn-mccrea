import React from "react";
import "./header.css";
import ReuseButton from "../ReuseButton/ReuseButton";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <div id="header-title">
        <h1>📚 Homeschool Day Tracker 🦅</h1>
      </div>
      <div id="header-nav">
        <nav id="header-nav-button-container">
          <ReuseButton idName={"mobile-menu"} text={"Menu"} />
          <div id="dropdown-menu-items">
            <Link to="/home" className="button-div">
              Home
            </Link>
            <Link to="/log" className="button-div">
              Log Activity
            </Link>
            <Link to="/viewer" className="button-div">
              Log Viewer
            </Link>
          </div>
          <div id="expanded-menu-items">
            <Link to="/home" className="button-div">
              Home
            </Link>
            <Link to="/log" className="button-div">
              Log Activity
            </Link>
            <Link to="/viewer" className="button-div">
              Log Viewer
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
