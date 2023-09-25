import React from "react";

import about1 from "../images/about1.jpeg";
import about2 from "../images/about2.jpeg";
import about3 from "../images/about3.jpeg";

import "../about.css";

function about() {
  return (
    <>
      <article className="aboutContainer">
        <section className="card">
          <h2>INVESTMENT STRATEGY</h2>
          <img src={about1} alt="" srcset="" />
          <p>
            Our strategy is simple: We treat your investment dollars like our
            own, always. We seek fair risk adjusted opportunistic returns.
          </p>
        </section>

        <section className="card">
          <h2>OUR TENANTS</h2>
          <img src={about2} alt="" srcset="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            consequuntur nesciunt eos porro! Quis, autem fugit natus suscipit
            soluta aspernatur accusantium facere? Quis libero recusandae sed.
            Blanditiis praesentium perspiciatis aliquid.
          </p>
        </section>

        <section className="card">
          <h2>OUR BROKERS</h2>
          <img src={about3} alt="" srcset="" />
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
