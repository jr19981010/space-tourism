import React, { useEffect  } from "react";
import Home from "../../../pages/Home";
import Destination from "../../../pages/Destination";
import Crew from "../../../pages/Crew";
import Technology from "../../../pages/Technology";
import './Navbar.css';
import myImage from "../../../logo.svg";
import { indicator, menuCtrl } from "../../../functions";
import { useDisplay } from "../../../DisplayContext";

export default function Navbar() {


    const { newdisplay, changeDisplay } = useDisplay();


    useEffect(() =>{
        indicator("nav.navbarnav ul li", "active");
        menuCtrl("button.hamburger-button", "nav.navbarnav ul", "flex");


        document.querySelector("button.hamburger-button").addEventListener("click", () => {
            document.querySelector("nav.navbarnav ul").classList.remove("hide");
            document.querySelector("nav.navbarnav ul").classList.add("show");
        }, false);


           
        document.querySelectorAll("nav.navbarnav ul.show li").forEach((list) =>{
            list.addEventListener("click", () => {
                document.querySelector("nav.navbarnav ul").classList.remove("show");
                document.querySelector("nav.navbarnav ul").classList.add("hide");
            })
        })
    },[newdisplay]);

    
    return (
        <>
            <header>
                <nav className="navbarnav grid">
                    <img className="logo" src={myImage} alt="logo" />
                    <div className="line"></div>
                    <ul className="text-white letter-spacing-2 show">
                        <li className={`${newdisplay === "Home" ? "active" : ""} ff-sans-cond letter-spacing-1 text-accent`} onClick={() => changeDisplay("Home")}>

                            <span className="text-white">00</span>
                            HOME

                        </li>
                        <li className={`${newdisplay === "Destination" ? "active" : ""} ff-sans-cond letter-spacing-1 text-accent`} onClick={() => changeDisplay("Destination")}>

                            <span className="text-white">01</span>
                            DESTINATION

                        </li>
                        <li className={`${newdisplay === "Crew" ? "active" : ""} ff-sans-cond letter-spacing-1 text-accent`} onClick={() => changeDisplay("Crew")}>

                            <span className="text-white">02</span>
                            CREW

                        </li>
                        <li className={`${newdisplay === "Technology" ? "active" : ""} ff-sans-cond letter-spacing-1 text-accent`} onClick={() => changeDisplay("Technology")}>

                            <span className="text-white">03</span>
                            TECHNOLOGY
                        </li>
                    </ul>
                    <button className="open hamburger-button"></button>
                </nav>

            </header>
            {newdisplay === "Home" && <Home />}
            {newdisplay === "Destination" && <Destination />}
            {newdisplay === "Crew" && <Crew />}
            {newdisplay === "Technology" && <Technology />}
        </>
    )
}