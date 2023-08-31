import React,{ useState } from "react";
import LaunchVehicle from "./LaunchVehicle"; 
import SpaceCapsule from "./SpaceCapsule";
import Spaceport from "./Spaceport";
export default function CarouselIndicator(){

    const [display, setDisplay] =useState(<LaunchVehicle />);

    return(
        <>
        {display}
        <button onClick={() => setDisplay(<LaunchVehicle />)}>1</button>
        <button onClick={() => setDisplay(<SpaceCapsule />)}>2</button>
        <button onClick={() => setDisplay(<Spaceport />)}>3</button>
        
        </>
    )
}