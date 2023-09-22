import React from "react";
import "../nav.css";

import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

function Navbar({ pageType }) {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link to="/">
              <img
                src="../public/rcpLogoSmall.png"
                alt="Reserve Capital Partners Logo"
                srcset=""
                className="navLogo"
              />
            </Link>
          </div>

          <ul>
            <li className={pageType === "About" ? "active" : ""}>
              <Link to="/about">About</Link>
            </li>

            <li className={pageType === "Team" ? "active" : ""}>
              <Link to="/team">Team</Link>
            </li>

            <li className={pageType === "Portfolio" ? "active" : ""}>
              <Link to="/portfolio">Portfolio</Link>
            </li>

            <li className={pageType === "Press" ? "active" : ""}>
              <Link to="/press">Press</Link>
            </li>

            <li className={pageType === "Contact" ? "active" : ""}>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <a
                target="_blank"
                href="https://investors.reservecappartners.com/"
              >
                Investors
              </a>
            </li>
          </ul>
          <Hamburger />
        </nav>
      </header>
    </>
  );
}

export default Navbar;
