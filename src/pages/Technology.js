import Navbar from "../components/pages/destination/Navbar";
import Heading from "../components/pages/technology/Heading";
import CarouselIndicator from "../components/pages/technology/CarouselIndicator";
import LaunchVehicle from "../components/pages/technology/LaunchVehicle";
import SpaceCapsule from "../components/pages/technology/SpaceCapsule";
import Spaceport from "../components/pages/technology/Spaceport";
export default function Technology(){
    return(
        <>
        <Navbar />
        <Heading />
        <CarouselIndicator />
        <LaunchVehicle />
        <SpaceCapsule />
        <Spaceport />
        </>
    )
}