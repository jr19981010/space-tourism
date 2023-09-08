import React from "react"
export default function Article(){
    return(
        <article className="home container">
            <section>
                <h1 className="text-accent fs-500 uppercase letter-spacing-3">  So, you want to travel to <span className="text-white uppercase ff-serif">Space</span></h1>
                <p className="text-accent">
                     Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                </p>

                <aside>
                <button className="explore text-dark ff-serif fs-600 uppercase">Explore</button>
                </aside>
            </section>
        </article>
    )
}