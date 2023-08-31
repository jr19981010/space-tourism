import React from "react";
import myImage from "../../../assets/technology/image-launch-vehicle-portrait.jpg"
import { fetchTechnology } from "../../../localData"

export default function LaunchVehicle(){
    const launchVehicle =fetchTechnology("Launch vehicle");
    return(    
    <article>
        <h2>
            <span>The terminology...</span>
            {launchVehicle.name}
        </h2>
        <p>
            {launchVehicle.description}
        </p>
        <img src={myImage} alt={launchVehicle.name}/>
    </article>
)
}