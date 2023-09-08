import React from "react";
import myImage from "../../../assets/technology/image-space-capsule-portrait.jpg"

import { fetchTechnology } from "../../../localData"

export default function SpaceCapsule(){
    const spaceCapsule =fetchTechnology("Space capsule");
    return(    
        <>
        <h2 className="text-white ff-serif fs-700 uppercase">
            <span className="text-white ff-sans-normal fs-200 uppercase letter-spacing-3">The terminology...</span><br/>
            {spaceCapsule.name}
        </h2>
        <p className="text-accent ff-sans-normal">
            {spaceCapsule.description}
        </p>
        <img src={myImage} alt={spaceCapsule.name} loading="lazy"/>
    </>
)
}