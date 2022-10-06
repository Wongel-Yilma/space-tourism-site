import React from "react";

import image from "../images/crew/background-crew-desktop.jpg";

import Ansari from "../images/crew/image-anousheh-ansari.png";
import Hurley from "../images/crew/image-douglas-hurley.png";
import Shuttleworth from "../images/crew/image-mark-shuttleworth.png";
import Glover from "../images/crew/image-victor-glover.png";

const crew = [
  {
    title: "Commander",
    name: "Douglas Hurley",
    text: `
  Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.`,
  },
  {
    title: "Mission Specialist",
    name: "Mark Shuttleworth",
    text: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist.`,
  },
  {
    title: "Pilot",
    name: "Victor Glover",
    text: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer. `,
  },
  {
    title: "Flight Engineer",
    name: "Anousheh Ansari",
    text: ` Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space.  `,
  },
];

const Crew = () => {
  const [state, setState] = React.useState(0);
  const [crewImg, setCrewImg] = React.useState(Hurley);

  React.useEffect(() => {
    switch (state) {
      case 0:
        setCrewImg(Hurley);
        break;
      case 1:
        setCrewImg(Shuttleworth);
        break;
      case 2:
        setCrewImg(Glover);
        break;
      case 3:
        setCrewImg(Ansari);
        break;
      default:
        setCrewImg(Hurley);
    }
  }, [state]);
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,

        width: "100vw",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="crew__description">
          <h2 className="heading-secondary">
            <p
              style={{
                display: "inline",
                fontSize: "inherit",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              02
            </p>{" "}
            Meet your crew
          </h2>
          <div className="crew__detail">
            <div className="crew__title">{crew[state].title}</div>
            <div className="crew__name">{crew[state].name}</div>
            <div className="crew__text">{crew[state].text}</div>
          </div>
          <div className="crew__selector">
            {crew.map((_, index) => {
              return (
                <div
                  key={index}
                  className={`radio-btn ${
                    index === state ? "radio-btn--active" : ""
                  }`}
                  onClick={() => setState(index)}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="container-box">
          <div className="crew__image">
            <img src={crewImg} alt="crew member" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
