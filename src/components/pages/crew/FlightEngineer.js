import { fetchCrew } from "../../../localData"
import myImage from "../../../assets/crew/image-anousheh-ansari.png"

export default function FlightEngineer(){

    const flightEngineer = fetchCrew("Anousheh Ansari");

    return(
        <article>
        <h2>
            <span>{flightEngineer.role}</span>{flightEngineer.name}
        </h2>
        <p>{flightEngineer.bio}</p>
        <img src={myImage} alt={flightEngineer.name}/>
        </article>
    )
}