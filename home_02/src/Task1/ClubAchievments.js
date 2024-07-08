import React from "react";
import "./css/ClubAchievements.css";

const ClubAchievments = ({medals, cups, goals}) =>{
    return(
        <div className="club-achievements">
            <h3>Achievements</h3>
            <p>Medals: {medals}</p>
            <p>Cups: {cups}</p>
            <p>Goals: {goals}</p>
        </div>
    )
}


export default ClubAchievments