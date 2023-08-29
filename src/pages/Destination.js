import Navbar from "../components/pages/home/Navbar";
import Heading from "../components/pages/destination/heading";
import SecondaryNavBar from "../components/pages/destination/SecondaryNavbar";
import Moon from "../components/pages/destination/Moon";
import Mars from "../components/pages/destination/Mars";
import Europa from "../components/pages/destination/Europa";
import Titan from "../components/pages/destination/Titan";
export default function destination(){
    return(
        <>
        <Navbar />
        <Heading />
        <SecondaryNavBar />
        <Moon />
        <Mars />
        <Europa />
        <Titan />

        </>

    )
}