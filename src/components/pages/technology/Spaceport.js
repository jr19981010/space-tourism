import React from "react";
import myImage from "../../../assets/technology/image-spaceport-portrait.jpg"

import { fetchTechnology } from "../../../localData"

export default function Spaceport(){
    const spaceport =fetchTechnology("Spaceport");
    return(    
        <>
        <h2 className="text-white ff-serif fs-700 uppercase">
            <span className="text-white ff-sans-normal fs-200 uppercase letter-spacing-3">The terminology...</span><br/>
            {spaceport.name}
        </h2>
        <p className="text-accent ff-sans-normal">
            {spaceport.description}
        </p>
        <img src={myImage} alt={spaceport.name} loading="lazy"/>
    </>
)
}