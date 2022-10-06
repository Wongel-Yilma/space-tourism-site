import React, { Suspense } from "react";

import image from "../images/destination/background-destination-desktop.jpg";

import Moon from "../images/destination/image-moon.png";
import Mars from "../images/destination/image-mars.png";
import Europa from "../images/destination/image-europa.png";
import Titan from "../images/destination/image-titan.png";
import DestinationButton from "./DestinationButton";
import Description from "./Description";

const data = {
  europa: {
    name: "Europa",
    text: ` The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.`,
    distance: "628 mil.km",
    travelTime: "3 years",
  },
  moon: {
    name: "Moon",
    text: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.
`,
    distance: "384,400 kM",
    travelTime: "3 days",
  },
  mars: {
    name: "Mars",
    text: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!
`,
    distance: " 225 mil. kM",
    travelTime: "9 Months",
  },
  titan: {
    name: "Titan",
    text: `The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.
`,
    distance: " 1.6 bil. kM",
    travelTime: "7 years",
  },
};

const Destination = () => {
  const [selected, setSelected] = React.useState("moon");
  const [destinationImg, setDestinationImg] = React.useState(Moon);

  React.useEffect(() => {
    switch (selected) {
      case "moon":
        setDestinationImg(Moon);
        break;
      case "mars":
        setDestinationImg(Mars);
        break;
      case "europa":
        setDestinationImg(Europa);
        break;
      case "titan":
        setDestinationImg(Titan);
        break;
      default:
        setDestinationImg(Moon);
    }
  }, [selected]);
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
          <Suspense fallback={<div>Loading...</div>}>
            <img
              className="destination__image"
              src={destinationImg}
              alt="destination"
            />
          </Suspense>
        </div>
        <div className="container-box">
          <nav className="nav">
            <DestinationButton
              selected={selected}
              setSelected={setSelected}
              destination="moon"
            />
            <DestinationButton
              selected={selected}
              setSelected={setSelected}
              destination="mars"
            />
            <DestinationButton
              selected={selected}
              setSelected={setSelected}
              destination="europa"
            />
            <DestinationButton
              selected={selected}
              setSelected={setSelected}
              destination="titan"
            />
          </nav>
          <div className="description">
            <Description selected={data[selected]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
