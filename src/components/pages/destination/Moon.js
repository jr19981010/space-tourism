import React from "react";
import {fetchDestination} from "../../../localData"
import myImage from "../../../../src/assets/destination/image-moon.png"
export default function Moon(){

  


    const moonData = fetchDestination("Moon");
    return(
        <>
            <h2 className="ff-serif fs-800 uppercase">{moonData.name}</h2>
            <img className="fade-in" src={myImage} alt={moonData.name} loading="lazy"/>
            <p className="text-accent ff-sans-normal">{moonData.description}</p>

            <dl className="grid">
                <dt className="dt-1 text-accent ff-sans-cond fs-400 uppercase">Avg. distance </dt>
                <dd className="dd-1 text-white fs-500 ff-serif uppercase">{moonData.distance}</dd>
                <dt className="dt-2 text-accent ff-sans-cond fs-400 uppercase">Est. travel time</dt>
                <dd className="dd-2 text-white fs-500 ff-serif uppercase">{moonData.travel}</dd>
            </dl>
        </>
    )
}