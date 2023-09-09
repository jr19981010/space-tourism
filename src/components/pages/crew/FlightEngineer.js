import React from "react";
import { fetchCrew } from "../../../localData"
import myImage from "../../../assets/crew/image-anousheh-ansari.png"

export default function FlightEngineer(){

    const flightEngineer = fetchCrew("Anousheh Ansari");

    return(
        <>
        <h2 className="text-white ff-serif fs-700 uppercase">
            <span className="text-accent fs-600">{flightEngineer.role}</span><br/>{flightEngineer.name}
        </h2>
        <p className="text-accent ff-sans-normal">{flightEngineer.bio}</p>
        <img className="flight-engineer fade-in" src={myImage} alt={flightEngineer.name} loading="lazy"/>
        </>
    )
}