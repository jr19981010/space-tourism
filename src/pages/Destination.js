import React from "react";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Heading from "../components/pages/destination/heading";
import SecondaryNavBar from "../components/pages/destination/SecondaryNavbar";
import './Destination.css';
import Moon from "../components/pages/destination/Moon";
import Mars from "../components/pages/destination/Mars";
import Titan from "../components/pages/destination/Titan";
import Europa from "../components/pages/destination/Europa";

export default function Destination(){

    const displayArray = [<Moon />, <Mars />, <Titan />, <Europa />];
    const [currentDisplayIndex, setcurrentDisplayIndex] = useState(0);

    const handler =useSwipeable({
        onSwipedLeft: () => handleSwipe("left"),
        onSwipedRight: () => handleSwipe("right")
    });


    function handleSwipe(destination){
        if(destination === "left"){
            const newIndex =(currentDisplayIndex + 1) % displayArray.length;
            setcurrentDisplayIndex(newIndex);
        }else if (destination ==="right"){
            const newIndex =(currentDisplayIndex - 1 + displayArray.length) % displayArray.length;
            setcurrentDisplayIndex(newIndex);
        }
    }


    const handleChildDisplay = (data) =>{
        const newIndex =displayArray.findIndex((component) =>
        React.isValidElement(component) && component.type === data.type);

        if (newIndex !== -1){
            setcurrentDisplayIndex(newIndex);
        }
    }
    
    const currentDisplay = displayArray[currentDisplayIndex];

    return(
        <>
        <div className="block-destination">
        </div>
        <article className="destination-container">
            <section className="destination"{...handler} >
                <Heading />
                <SecondaryNavBar handleDisplay ={handleChildDisplay} currentDisplay = {currentDisplay}/>
            </section>
        </article>
        </>
        
    )
}