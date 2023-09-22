import React from "react";
import "../about.css";

import Rachel from "../../public/teamPics/RACHELMCCREADY.jpeg";

import TeamBuilder from "../components/TeamBuilder";

function Team() {
  const TeamBlocks = [
    {
      firstName: "BRANT",
      lastName: "LANDRY",
      title: "Partner",
      imgSrc: "",
      blockNumber: "1",
    },
    {
      imgSrc: { Rachel },
      firstName: "RACHEL",
      lastName: "MCCREADY",
      title: "Chief Executive Officer",
    },
    {
      firstName: "JAMISON ",
      lastName: "BERRYHILL",
      title: "VICE PRESIDENT OF DEVELOPMENT",
    },
    {
      firstName: "MATT",
      lastName: "WALDON",
      title: "VICE PRESIDENT LEASING",
    },
    {
      firstName: "DAVID",
      lastName: "GUMBERT",
      title: "SENIOR ANALYST",
    },
    {
      firstName: "EDDIE",
      lastName: "",
      title: "DIRECTOR OF FINANCE",
    },
    {
      firstName: "KRISTEN",
      lastName: "SCHWARTZ",
      title: "DIRECTOR OF PROPERTY MANAGEMENT",
    },
    {
      firstName: "DEBBIE",
      lastName: "LANDRY",
      title: "OFFICE MANAGER",
    },
    {
      firstName: "GREG",
      lastName: "ASHTON",
      title: "SENIOR PROPERTY MANAGER",
    },
    {
      firstName: "LAURA",
      lastName: " ELIZONDO",
      title: "SENIOR PROPERTY ACCOUNTANT",
    },
    {
      firstName: "ANNABEL",
      lastName: "VALADEZ",
      title: "CORPORATE ACCOUNTANT",
    },
    {
      firstName: "JENNIFER",
      lastName: "URIEGA",
      title: "ADMINISTRATOR OF PROPERTY MANAGEMENT",
    },
    {
      firstName: "LARRY",
      lastName: "GARZA",
      title: "ASSISTANT DIRECTOR OF ENGINEERING",
    },
  ];

  return (
    <>
      <div className="team-grid">
        {TeamBlocks.map((block, i) => {
          return (
            <>
              <TeamBuilder
                firstName={block.firstName}
                lastName={block.lastName}
                imgSrc={block.imgSrc}
                title={block.title}
                blockNumber={i + 1}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Team;
