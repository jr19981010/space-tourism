import React, { useState } from "react";
import Commander from "./Commander";
import MissionSpecialist from "./MissionSpecialist";
import Pilot from "./Pilot";
import FlightEngineer from "./FlightEngineer";
export default function CarouselIndicator(){

        const [display, setDisplay] = useState(<Commander />);


    return(
        <>
            {display}

        <button onClick={() => setDisplay(<Commander />)}>1</button>
        <button onClick={() => setDisplay(<MissionSpecialist />)}>2</button>
        <button onClick={() => setDisplay(<Pilot/>)}>3</button>
        <button onClick={() => setDisplay(<FlightEngineer />)}>4</button>
        
        </>
    )
}