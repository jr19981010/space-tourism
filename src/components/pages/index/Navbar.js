import React,{useState} from "react";
import Home from "../../../pages/Home";
import Destination from "../../../pages/Destination";
import Crew from "../../../pages/Crew";
import Technology from "../../../pages/Technology";


export default function Navbar(){

    const [display, SetDisplay] =useState(<Home />);

    return(
    <>
    
        <nav>
            <ul>
                 <li onClick={() => SetDisplay(<Home />)}>
                    
                    <span>00</span>
                    HOME
                    
                </li>
                <li onClick={() => SetDisplay(<Destination />)}>
                
                    <span>01</span>
                    DESTINATION
                 
                </li>
                <li onClick={() => SetDisplay(<Crew />)}>
            
                    <span>02</span>
                    CREW
                    
                </li>
                <li onClick={() => SetDisplay(<Technology />)}>
               
                    <span>03</span>
                    TECHNOLOGY
                   
                </li>
                
            </ul>
        </nav>
        {display}
    </>
    )
}