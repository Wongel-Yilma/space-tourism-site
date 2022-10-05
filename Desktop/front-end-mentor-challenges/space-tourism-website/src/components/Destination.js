import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../images/destination/background-destination-desktop.jpg";
import Moon from "../images/destination/image-moon.png";

const Destination = () => {
  const [destination, setDestination] = React.useState("moon");
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="image-box">
          <h2 className="heading-secondary">
            <p
              style={{
                display: "inline",
                fontSize: "inherit",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              01
            </p>{" "}
            Pick your destination
          </h2>
          <img className="destination__image" src={Moon} alt="destination" />
        </div>
        <div className="container-box">
          <nav className="nav">
            <button className="btn ">Moon</button>
            <button className="btn">Mars</button>
            <button className="btn">Europa</button>
            <button className="btn">Titan</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Destination;
