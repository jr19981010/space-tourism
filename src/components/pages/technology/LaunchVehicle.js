import React from "react";
import myImage from "../../../assets/technology/image-launch-vehicle-portrait.jpg"
import { fetchTechnology } from "../../../localData"

export default function LaunchVehicle(){
    const launchVehicle =fetchTechnology("Launch vehicle");
    return(    
    <>
        <h2 className="text-white ff-serif fs-700 uppercase">
            <span className="text-white ff-sans-normal fs-200 uppercase letter-spacing-3">The terminology...</span><br/>
            {launchVehicle.name}
        </h2>
        <p className="text-accent ff-sans-normal">
            {launchVehicle.description}
        </p>
        <img className="fade-in" src={myImage} alt={launchVehicle.name} loading="lazy"/>
    </>
)
}