import React from "react";
import {fetchDestination} from "../../../localData"
import myImage from "../../../../src/assets/destination/image-mars.png"


export default function Mars({handler}){

    const marsData = fetchDestination("Mars");
    return(
        <>
            <h2 className="ff-serif fs-800 uppercase">{marsData.name}</h2>
            <img src={myImage} alt={marsData.name} loading="lazy" {...handler}/>
            <p className="text-accent ff-sans-normal">{marsData.description}</p>

            <dl className="grid">
                <dt className="dt-1 text-accent ff-sans-cond fs-400 uppercase">Avg. distance </dt>
                <dd className="dd-1 text-white fs-500 ff-serif uppercase">{marsData.distance}</dd>
                <dt className="dt-2 text-accent ff-sans-cond fs-400 uppercase">Est. travel time</dt>
                <dd className="dd-2 text-white fs-500 ff-serif uppercase">{marsData.travel}</dd>
            </dl>
        </>
    )
}