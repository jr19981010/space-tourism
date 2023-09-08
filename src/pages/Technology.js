import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Heading from "../components/pages/technology/Heading";
import CarouselIndicator from "../components/pages/technology/CarouselIndicator";
import LaunchVehicle from "../components/pages/technology/LaunchVehicle";
import SpaceCapsule from "../components/pages/technology/SpaceCapsule";
import Spaceport from "../components/pages/technology/Spaceport";
import "./Technology.css"
export default function Technology(){

    const displayArray = [<LaunchVehicle />, <SpaceCapsule />, <Spaceport/>];
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
            React.isValidElement(component) && component.type ===data.type); 
        if(newIndex !== -1){
            setcurrentDisplayIndex(newIndex);
        }
    }
    const currentDisplay = displayArray[currentDisplayIndex];

    return(
        <>
        <div className="block-technology">
        </div>
        <article className="technology-container">
        <section className="technology" {...handler}>
        <Heading />
        <CarouselIndicator currentDisplay={currentDisplay} handleDisplay={handleChildDisplay}/>
        </section>
        </article>
        </>
        
    )
}