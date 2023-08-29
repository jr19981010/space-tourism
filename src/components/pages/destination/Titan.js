import {fetchDestination} from "../../../localData"
import myImage from "../../../../src/assets/destination/image-titan.png"
export default function Titan(){

  


    const titanData = fetchDestination("Titan");
    return(
        <article>
            <h2>{titanData.name}</h2>
            <img src={myImage} alt={titanData.name}/>
                <p>{titanData.description}</p>

                <dl>
                    <dt>Avg. distance </dt>
                    <dd>{titanData.distance}</dd>
                
                    <dt>Est. travel time</dt>
                    <dd>{titanData.travel}</dd>
                </dl>
        </article>
    )
}