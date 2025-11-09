import React, { useEffect, useState } from "react";
import "./loading-page.css";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer); /* This is a cleanup function. */
  }, []);

  return (
    <div id="loading-page-main-div">
      {isLoading ? (
        <div id="loading-statement">
          <p>
            <em>loading...</em>
          </p>

          <p className="loader"></p>
        </div>
      ) : (
        <div id="no-logs-statement">
          <p>Sorry, no log items to see here.</p>
        </div>
      )}
    </div>
  );
};

export default LoadingPage;
