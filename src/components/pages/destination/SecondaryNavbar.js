import React from "react";
import { useState } from "react";
import Moon from "./Moon";
import Europa from "./Europa";
import Titan from "./Titan";
import Mars from "./Mars";


export default function SecondaryNavBar(){

    const [display, SetDisplay] = useState(<Moon />);

    return(
        <>
        <nav>
        <ul>
             <li>
                <button onClick={() => SetDisplay(<Moon />)}>Moon</button>
            </li>
            <li>
            <button onClick={ () => SetDisplay(<Mars />)}>Mars</button>
            </li>
            <li>
            <button onClick={ () => SetDisplay(<Titan />)}>Titan</button>
            </li>
            <li>
            <button onClick={ () => SetDisplay(<Europa />)}>Europa</button>
            </li>
        </ul>
    </nav>

        {display}
        </>


    )
}