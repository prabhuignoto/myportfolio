import React from "react";
import { About } from "../styles/aboutme";

export default function AboutMe() {
  return (
    <div
      className="box"
      style={{
        position: "relative",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <About className="content">
        <p>Hello, my name is Prabhu Murthy</p>
        <p>
          I'm a full-stack javascript developer, web application architect, and
          designer.
        </p>
        <p>
          My area of expertise is frontend app development using industry
          standard frameworks and libraries such as React, Vue, Angular, and
          Svelte. I also use Node JS, Graph QL, Apollo Server, and Sails JS to
          design and build application servers.
        </p>
        <div>
          <a
            href="mailto:prabhu.m.murthy@gmail.com"
            style={{ marginRight: "0.5rem", fontSize: "1.25rem" }}
          >
            Contact me
          </a>
          {/* <a
            href="https://app.enhancv.com/share/0c0a2492?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            style={{ marginRight: "0.25rem", fontSize: "1.25rem" }}
            target="_new"
          >
            View Resume
          </a> */}
        </div>
      </About>
    </div>
  );
}
