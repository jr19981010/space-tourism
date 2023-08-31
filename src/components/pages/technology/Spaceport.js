import React from "react";
import myImage from "../../../assets/technology/image-spaceport-portrait.jpg"

import { fetchTechnology } from "../../../localData"

export default function Spaceport(){
    const spaceport =fetchTechnology("Spaceport");
    return(    
    <article>
        <h2>
            <span>The terminology...</span>
            {spaceport.name}
        </h2>
        <p>
            {spaceport.description}
        </p>
        <img src={myImage} alt={spaceport.name}/>
    </article>
)
}