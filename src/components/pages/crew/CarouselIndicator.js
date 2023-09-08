import React from "react";
import Commander from "./Commander";
import MissionSpecialist from "./MissionSpecialist";
import Pilot from "./Pilot";
import FlightEngineer from "./FlightEngineer";
import {indicator} from "../../../functions";
export default function CarouselIndicator({handleDisplay, currentDisplay}) {


        indicator("div.crew-carousel-indicator button", "active")


    return (
        <>
            {currentDisplay}
            <div className="crew-carousel-indicator">
                <button className={ currentDisplay.type === Commander ? "active" : "" } onClick={() => handleDisplay(<Commander />)}></button>
                <button className={ currentDisplay.type === MissionSpecialist ? "active" : "" } onClick={() => handleDisplay(<MissionSpecialist />)}></button>
                <button className={ currentDisplay.type === Pilot ? "active" : "" } onClick={() => handleDisplay(<Pilot />)}></button>
                <button className={ currentDisplay.type === FlightEngineer ? "active" : "" } onClick={() => handleDisplay(<FlightEngineer />)}></button>
            </div>
        </>
    )
}