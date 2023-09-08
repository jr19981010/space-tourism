import React from "react";
import LaunchVehicle from "./LaunchVehicle";
import SpaceCapsule from "./SpaceCapsule";
import Spaceport from "./Spaceport";
import {indicator} from "../../../functions";
export default function CarouselIndicator({handleDisplay, currentDisplay}) {


        indicator("div.technology-carousel-indicator button", "active");

    return (
        <>
            {currentDisplay}
            <div className="technology-carousel-indicator">
                <button className={` ${currentDisplay.type === LaunchVehicle ? "active" : ""} ff-serif fs-500`} onClick={() => handleDisplay(<LaunchVehicle />)}>1</button>
                <button className={`${currentDisplay.type === SpaceCapsule ? "active" : ""}  ff-serif fs-500`} onClick={() => handleDisplay(<SpaceCapsule />)}>2</button>
                <button className={`${currentDisplay.type === Spaceport ? "active" : ""} ff-serif fs-500`} onClick={() => handleDisplay(<Spaceport />)}>3</button>
            </div>
        </>
    )
}

