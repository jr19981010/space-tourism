import myImage from "../../../assets/technology/image-space-capsule-portrait.jpg"

import { fetchTechnology } from "../../../localData"

export default function SpaceCapsule(){
    const spaceCapsule =fetchTechnology("Space capsule");
    return(    
    <article>
        <h2>
            <span>The terminology...</span>
            {spaceCapsule.name}
        </h2>
        <p>
            {spaceCapsule.description}
        </p>
        <img src={myImage} alt={spaceCapsule.name}/>
    </article>
)
}