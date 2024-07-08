import React from "react";
import "./css/ClubInfo.css";
const ClubInfo = ({name, city, year, herb}) => {
    return(
        <div className="club-info">
            <h2>{name}</h2>
            <p>{city}</p>
            <p>{year}</p>
            <img src={herb} alt={`${name} Herb`}/>
            
        </div>
    )

}
export default ClubInfo