import React from "react";
import image from "../images/home/background-home-desktop.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        width: "100vw",
        backgroundSize: "cover",
      }}
    >
      Home
    </div>
  );
};

export default Home;
