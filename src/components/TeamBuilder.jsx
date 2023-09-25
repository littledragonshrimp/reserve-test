import React from "react";

import Team from "../pages/Team";

function TeamBuilder({ firstName, lastName, imgSrc, title, blockNumber }) {
  return (
    <>
      <div className={`Team${blockNumber} teamCard`}>
        <img src={imgSrc} alt="" />
        <h2>
          {firstName} {lastName}
        </h2>
        <h3> {title}</h3>
      </div>
    </>
  );
}

export default TeamBuilder;
