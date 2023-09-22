import React from "react";
import "../footer.css";
import navbarLogo from "../Images/rcpLogoSmall.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <ul>
          <li>
            <a href="/">
              <img src={navbarLogo} alt="" srcset="" className="navLogo" />
            </a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="https://investors.reservecappartners.com/">Investors</a>
          </li>
        </ul>

        <p>© Copyright {year} Reserve Capital Partners. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
