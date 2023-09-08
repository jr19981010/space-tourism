import React from "react";
import { fetchCrew } from "../../../localData"
import myImage from "../../../assets/crew/image-mark-shuttleworth.png"

export default function MissionSpecialist(){

    const missionSpecialist = fetchCrew("Mark Shuttleworth");

    return(
        <>
        <h2 className="text-white ff-serif uppercase">
            <span className="text-accent fs-600">{missionSpecialist.role}</span><br/>{missionSpecialist.name}
        </h2>
        <p className="text-accent ff-sans-normal">{missionSpecialist.bio}</p>
        <img className="mission-specialist" src={myImage} alt={missionSpecialist.name} loading="lazy"/>
        </>
    )
}