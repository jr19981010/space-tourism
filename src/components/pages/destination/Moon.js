import {fetchDestination} from "../../../localData"
import myImage from "../../../../src/assets/destination/image-moon.png"
export default function Moon(){

  


    const moonData = fetchDestination("Moon");
    return(
        <article>
            <h2>{moonData.name}</h2>
            <img src={myImage} alt={moonData.name}/>
                <p>{moonData.description}</p>

                <dl>
                    <dt>Avg. distance </dt>
                    <dd>{moonData.distance}</dd>
                
                    <dt>Est. travel time</dt>
                    <dd>{moonData.travel}</dd>
                </dl>
        </article>
    )
}