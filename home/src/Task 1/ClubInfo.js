import React from "react";
import "./css/ClubInfo.css";

const ClubInfo = ({ name, city, founded, emblem }) => {
  return (
    <div className="club-info">
      <h2>{name}</h2>
      <p>City: {city}</p>
      <p>Founded: {founded}</p>
      <img src={emblem} alt={`${name} Emblem`} />
    </div>
  );
};

export default ClubInfo;
