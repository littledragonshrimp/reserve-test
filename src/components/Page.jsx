import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "../pages/home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Press from "../pages/Press";
import Team from "../pages/Team";

import ErrorPage from "../error-page";

function Page({ pageType }) {
  let component; // blank component that gets filled in the switch statements

  switch (pageType) {
    case "Home":
      component = <Home />; //example of filled in switch statement
      break;

    case "About":
      component = <About />;
      break;

    case "Team":
      component = <Team />;
      break;

    case "Contact":
      component = <Contact />;
      break;

    case "Portfolio":
      component = <Portfolio />;
      break;

    case "Press":
      component = <Press />;
      break;

    default:
      component = (
        <div className="error-container">
          <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, We couldn't find that page.</p>
          </div>
        </div>
      );
      break;
  }

  return (
    <>
      <Navbar pageType={pageType} />
      {component}
      <Footer />
    </>
  );
}

export default Page;
