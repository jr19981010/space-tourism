import { fetchCrew } from "../../../localData"
import myImage from "../../../assets/crew/image-douglas-hurley.png"

export default function Commander(){

    const commander = fetchCrew("Douglas Hurley");

    return(
        <article>
        <h2>
            <span>{commander.role}</span>{commander.name}
        </h2>
        <p>{commander.bio}</p>
        <img src={myImage} alt={commander.name}/>
        </article>
    )
}