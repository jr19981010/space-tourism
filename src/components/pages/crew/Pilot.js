import React from "react";
import { fetchCrew } from "../../../localData"
import myImage from "../../../assets/crew/image-victor-glover.png"

export default function Pilot(){

    const pilot = fetchCrew("Victor Glover");

    return(
        <>
        <h2 className="text-white ff-serif fs-700 uppercase">
            <span className="text-accent fs-600">{pilot.role}</span><br/>{pilot.name}
        </h2>
        <p className="text-accent ff-sans-normal">{pilot.bio}</p>
        <img className="pilot fade-in" src={myImage} alt={pilot.name} loading="lazy"/>
        </>
    )
}