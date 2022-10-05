import React from "react";

const DestinationButton = ({ destination, setSelected, selected }) => {
  return (
    <button
      className={`btn ${destination === selected ? "btn--active" : ""}`}
      onClick={() => setSelected(destination)}
    >
      {destination.toUpperCase()}
    </button>
  );
};

export default DestinationButton;
