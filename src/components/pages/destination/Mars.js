import {fetchDestination} from "../../../localData"
import myImage from "../../../../src/assets/destination/image-mars.png"


export default function Mars(){

    const marsData = fetchDestination("Mars");
    return(
        <article>
            <h2>{marsData.name}</h2>
            <img src={myImage} alt={marsData.name}/>
                <p>{marsData.description}</p>

                <dl>
                    <dt>Avg. distance </dt>
                    <dd>{marsData.distance}</dd>
                
                    <dt>Est. travel time</dt>
                    <dd>{marsData.travel}</dd>
                </dl>
        </article>
    )
}