import React from "react";
import Moon from "./Moon";
import Europa from "./Europa";
import Titan from "./Titan";
import Mars from "./Mars";
import { indicator } from "../../../functions";

export default function SecondaryNavBar({ handleDisplay, currentDisplay }) {

    indicator("nav.desti-Nav ul li", "active");

  return (
    <>

      <nav className="desti-Nav">
        <ul className="text-accent ff-sans-cond uppercase letter-spacing-1">
          <li className={currentDisplay.type === Moon ? "active" : ""} onClick={() => handleDisplay(<Moon />)}>
            Moon
          </li>
          <li className={currentDisplay.type === Mars ? "active" : ""} onClick={() => handleDisplay(<Mars />)}>
            Mars
          </li>
          <li className={currentDisplay.type === Titan ? "active" : ""} onClick={() => handleDisplay(<Titan />)}>
            Titan
          </li>
          <li className={currentDisplay.type === Europa ? "active" : ""} onClick={() => handleDisplay(<Europa />)}>
            Europa
          </li>
        </ul>
      </nav>

          {currentDisplay}
    </>
  );
}
