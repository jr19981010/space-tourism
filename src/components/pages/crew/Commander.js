import React from "react";
import { fetchCrew } from "../../../localData"
import myImage from "../../../assets/crew/image-douglas-hurley.png"

export default function Commander(){

    const commander = fetchCrew("Douglas Hurley");

    return(
        <>
        <h2 className="text-white ff-serif fs-700 uppercase">
            <span className="text-accent fs-600">{commander.role}</span><br/>{commander.name}
        </h2>
        <p className="text-accent ff-sans-normal">{commander.bio}</p>
        <img className="commander"  src={myImage} alt={commander.name} loading="lazy"/>
        </>
    )
}
// width={494.469} height={673.391}