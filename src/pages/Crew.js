import React, { Component, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Heading from "../components/pages/crew/Heading";
import CarouselIndicator from "../components/pages/crew/CarouselIndicator";
import './Crew.css'
import Commander from "../components/pages/crew/Commander";
import MissionSpecialist from "../components/pages/crew/MissionSpecialist";
import Pilot from "../components/pages/crew/Pilot";
import FlightEngineer from "../components/pages/crew/FlightEngineer";
import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";
export default function Crew(){

const displayArray = [<Commander />, <MissionSpecialist />, <Pilot />, <FlightEngineer />]
const [currentDisplayIndex, setcurrentDisplayIndex] = useState(0);

const handler = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right")
})
function handleSwipe(direction){
    if(direction === "left"){
        const newIndex = (currentDisplayIndex + 1) % displayArray.length;
        setcurrentDisplayIndex(newIndex);
    }else if(direction === "right"){
        const newIndex =(currentDisplayIndex - 1 + displayArray.length) % displayArray.length;
        setcurrentDisplayIndex(newIndex);
    }
}

const handleChildDisplay = (data) =>{
    const newIndex = displayArray.findIndex((component) =>
        React.isValidElement(component) && component.type === data.type);

        if(newIndex !== -1){
            setcurrentDisplayIndex(newIndex);
        }
}

const currentDisplay =displayArray[currentDisplayIndex];

return(
    <>
        <div className="block-crew">
        </div>
    <article className="crew-container">
        <section className="crew" {...handler}>
            <Heading />
            <CarouselIndicator currentDisplay={currentDisplay} handleDisplay={handleChildDisplay}/>
        </section>
    </article>
    </>
    )    
}