import React from "react";

const Description = ({ selected }) => {
  return (
    <div className="description">
      <h1 className="heading-primary">{selected.name}</h1>
      <p>{selected.text}</p>
      <div className="data-box">
        <div>
          <div className="data-title">Avg. distance</div>
          <div className="data">{selected.distance}</div>
        </div>
        <div>
          <div className="data-title">Est. travel time</div>
          <div className="data">{selected.travelTime}</div>
        </div>
      </div>
    </div>
  );
};

export default Description;
