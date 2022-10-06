import React from "react";
import image from "../images/technology/background-technology-desktop.jpg";

import Vehicle from "../images/technology/image-launch-vehicle-portrait.jpg";
import Capsule from "../images/technology/image-space-capsule-portrait.jpg";
import Spaceport from "../images/technology/image-spaceport-portrait.jpg";

const technology = [
  {
    name: "Launch vehicle",
    text: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!`,
  },
  {
    name: "Spaceport",
    text: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.`,
  },
  {
    name: "Space capsule",
    text: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.`,
  },
];

const Technology = () => {
  const [selected, setSelected] = React.useState(0);
  let techImg;

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
        <div className="technology-box">
          <div className="number-box">
            {technology.map((_, index) => {
              return (
                <button
                  className={`number ${
                    selected === index ? "number-selected" : ""
                  }`}
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
          <div className="text-box">
            <h2 className="heading-secondary"> The Terminology...</h2>
            <p className="technology-title">{technology[selected].name}</p>
            <p>{technology[selected].text}</p>
          </div>
        </div>
        <div className="technology-img">
          <img
            src={
              selected === 0 ? Vehicle : selected === 1 ? Spaceport : Capsule
            }
            alt="technology"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
