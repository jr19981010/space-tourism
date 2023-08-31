import React from "react";
import { fetchCrew } from "../../../localData"
import myImage from "../../../assets/crew/image-victor-glover.png"

export default function Pilot(){

    const pilot = fetchCrew("Victor Glover");

    return(
        <article>
        <h2>
            <span>{pilot.role}</span>{pilot.name}
        </h2>
        <p>{pilot.bio}</p>
        <img src={myImage} alt={pilot.name}/>
        </article>
    )
}