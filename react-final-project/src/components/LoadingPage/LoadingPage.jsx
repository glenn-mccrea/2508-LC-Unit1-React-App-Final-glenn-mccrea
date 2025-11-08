import React from "react";
import "./loading-page.css";

const LoadingPage = () => {
  return (
    <div id="loading-page-main-div">
      <p>
        <em>loading...</em>
      </p>
      <span className="loader"></span>
    </div>
  );
};

export default LoadingPage;
