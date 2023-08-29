import Heading from "../components/pages/crew/Heading";
import Navbar from "../components/pages/crew/Navbar";
import Commander from "../components/pages/crew/Commander";
import MissionSpecialist from "../components/pages/crew/MissionSpecialist";
import Pilot from "../components/pages/crew/Pilot";
import FlightEngineer from "../components/pages/crew/FlightEngineer";
import CarouselIndicator from "../components/pages/crew/CarouselIndicator";
export default function Crew(){

return(
    <>
    <Navbar />
    <Heading />
    <Commander />
    <MissionSpecialist />
    <Pilot />
    <FlightEngineer />
    <CarouselIndicator/>
    </>
    )    
}