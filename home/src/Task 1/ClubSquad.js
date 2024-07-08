import React from "react";
import "./css/ClubSquad.css";

const ClubSquad = ({ squad }) => {
  return (
    <div className="club-squad">
      <h3>Current Squad</h3>
      <ul>
        {squad.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClubSquad;
