import {fetchDestination} from "../../../localData"
import myImage from "../../../../src/assets/destination/image-europa.png"


export default function Europa(){

    const europaData = fetchDestination("Europa");
    return(
        <article>
            <h2>{europaData.name}</h2>
            <img src={myImage} alt={europaData.name}/>
                <p>{europaData.description}</p>

                <dl>
                    <dt>Avg. distance </dt>
                    <dd>{europaData.distance}</dd>
                
                    <dt>Est. travel time</dt>
                    <dd>{europaData.travel}</dd>
                </dl>
        </article>
    )
}