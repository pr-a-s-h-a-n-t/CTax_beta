import React from "react";
import test from "../../../assets/test.svg";
import logo from "../../../assets/logo.svg";

export default function Hero() {
  return (
    <div>
      <div
        style={{
          background:
            " -webkit-linear-gradient(45deg, #D956A7 0%, #565DFA 60.42%, #3983FB",

          fontWeight: "bold",
          width: " 1360px",
          height: " 620px",
          // background:" #EEEEEE",
          borderRadius: " 40px",
          margin: "auto ",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
          textAlign: "initial",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 40px 40px ",
        }}
      >
        <div className="left_hero_section">
          <h1
            style={{
              padding: " 0 0 0 1rem",
              textShadow: " 2px 2px 4px #000000",
              fontSize: "6rem",
              lineHeight: "6rem",
              color: " aliceblue",
            }}
          >
            Legal
            <span
              style={{
                fontSize: "6rem",
                lineHeight: "5rem",
                color: " #d27e019c",
              }}
            >
              {" "}
              Services
            </span>{" "}
            Platform
          </h1>
          <div className="subheading">
            <h3
              style={{
                color: " lavender",
                width: "fit-content",
                margin: " auto",
                padding: " 2rem",
                textAlign: "initial",
                fontSize: " x-large",
              }}
            >
              Invest your time and efforts on running your business. Leave the
              accounting to Us.
            </h3>
          </div>
        </div>
        <div className="right_hero_section">
          <img
            style={{
              width: "650px",
              height: "350px",
            }}
            src={logo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
