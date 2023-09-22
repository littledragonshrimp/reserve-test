import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../about.css";

function about() {
  return (
    <>
      <article className="aboutContainer">
        <section className="card">
          <h2>INVESTMENT STRATEGY</h2>
          <img src="../public/about-1.jpeg" alt="" srcset="" />
          <p>
            Our strategy is simple: We treat your investment dollars like our
            own, always. We seek fair risk adjusted opportunistic returns.
          </p>
        </section>

        <section className="card">
          <h2>OUR TENANTS</h2>
          <img src="../public/about-2.jpeg" alt="" srcset="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            consequuntur nesciunt eos porro! Quis, autem fugit natus suscipit
            soluta aspernatur accusantium facere? Quis libero recusandae sed.
            Blanditiis praesentium perspiciatis aliquid.
          </p>
        </section>

        <section className="card">
          <h2>OUR BROKERS</h2>
          <img src="../public/about-3.jpeg" alt="" srcset="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            consequuntur nesciunt eos porro! Quis, autem fugit natus suscipit
            soluta aspernatur accusantium facere? Quis libero recusandae sed.
            Blanditiis praesentium perspiciatis aliquid.
          </p>
        </section>
      </article>
    </>
  );
}

export default about;
