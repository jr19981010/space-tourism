import { fetchCrew } from "../../../localData"
import myImage from "../../../assets/crew/image-mark-shuttleworth.png"

export default function MissionSpecialist(){

    const missionSpecialist = fetchCrew("Mark Shuttleworth");

    return(
        <article>
        <h2>
            <span>{missionSpecialist.role}</span>{missionSpecialist.name}
        </h2>
        <p>{missionSpecialist.bio}</p>
        <img src={myImage} alt={missionSpecialist.name}/>
        </article>
    )
}