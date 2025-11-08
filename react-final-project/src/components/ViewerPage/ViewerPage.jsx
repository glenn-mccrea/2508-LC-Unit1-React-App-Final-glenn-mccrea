import React from "react";
import "./viewer-page.css";
import LogCard from "../LogCard/LogCard";

const ViewerPage = () => {
  return (
    <main>
      <div id="viewer-page-div">
        <div id="card-holder-container">
          <LogCard />
        </div>
      </div>
    </main>
  );
};

export default ViewerPage;
