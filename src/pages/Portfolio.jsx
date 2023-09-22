import React from "react";
import PortfolioBuilder1 from "../components/PortfolioBuilder1.jsx";

function Portfolio() {
  return (
    <>
      <div className="Fund1Container">
        <h2>RESERVE CAPITAL FUND I PORTFOLIO</h2>
        <PortfolioBuilder1 />
      </div>
      <div className="Fund2Container">
        <h2>RESERVE CAPITAL FUND II PORTFOLIO</h2>
        <PortfolioBuilder1 />
      </div>
    </>
  );
}

export default Portfolio;
