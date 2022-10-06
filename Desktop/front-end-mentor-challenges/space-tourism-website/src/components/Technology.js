import React from "react";
import image from "../images/technology/background-technology-desktop.jpg";

const Technology = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
      }}
    >
      <div className="container"></div>
    </div>
  );
};

export default Technology;
