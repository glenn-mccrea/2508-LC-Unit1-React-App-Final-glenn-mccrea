import React from "react";
import "./loading-page.css";

const LoadingPage = () => {
  return (
    <div id="loading-page-main-div">
      <div id="loading-statement">
        <p>
          <em>loading...</em>
        </p>

        <p className="loader"></p>
      </div>

      <div id="no-logs-statement">
        <p>Sorry, no log items to see here.</p>
      </div>
    </div>
  );
};

export default LoadingPage;
