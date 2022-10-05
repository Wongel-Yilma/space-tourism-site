import React from "react";
import { Link } from "react-router-dom";
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
      <div className="container">
        <div>
          <h2 className="heading-secondary">
            So, you want to travel to <h1 className="heading-primary">Space</h1>
          </h2>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience! Explore
        </div>
        <div className="container-box">
          <Link to="/destination">
            <button className="btn--big">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
