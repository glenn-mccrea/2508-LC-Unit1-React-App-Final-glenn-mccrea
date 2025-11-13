import React from "react";
import "./viewer-page.css";
import LogCard from "../LogCard/LogCard";
import LoadingPage from "../LoadingPage/LoadingPage";

const ViewerPage = ({ cards }) => {
  /* Receives the card that is pulled from app.jsx */
  /* conditional rendering below */

  {
    if (cards.length === 0) {
      /* if no cards (logs) have been added, the loading page appears */
      return <LoadingPage />;
    } else {
      return (
        <main>
          <div id="viewer-page-div">
            {/* Below: map loops through the array as many times as there are contents. Everytime it does run, it pulls out the data and places it onto a LogCard. */}
            {cards.map((card) => (
              <LogCard
                key={card.id}
                subject={card.subject}
                duration={card.duration}
                materials={card.materials}
                notes={card.notes}
              />
            ))}
          </div>
        </main>
      );
    }
  }
};

export default ViewerPage;
