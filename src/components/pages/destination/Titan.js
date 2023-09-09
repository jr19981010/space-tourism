import React from "react";
import {fetchDestination} from "../../../localData"
import myImage from "../../../../src/assets/destination/image-titan.png"
export default function Titan({handler}){

  


    const titanData = fetchDestination("Titan");
    return(
        <>
            <h2 className="ff-serif fs-800 uppercase">{titanData.name}</h2>
            <img className="fade-in" src={myImage} alt={titanData.name} loading="lazy" {...handler}/>
            <p className="text-accent ff-sans-normal">{titanData.description}</p>

            <dl className="grid">
                <dt className="dt-1 text-accent ff-sans-cond fs-400 uppercase">Avg. distance </dt>
                <dd className="dd-1 text-white fs-500 ff-serif uppercase">{titanData.distance}</dd>
                <dt className="dt-2 text-accent ff-sans-cond fs-400 uppercase">Est. travel time</dt>
                <dd className="dd-2 text-white fs-500 ff-serif uppercase">{titanData.travel}</dd>
            </dl>
        </>
    )
}