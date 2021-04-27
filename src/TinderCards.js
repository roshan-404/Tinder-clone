import { SwipeableDrawer } from '@material-ui/core'
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Rohit",
            url: 
                "https://i2.wp.com/twincitiesgeek.com/wp-content/uploads/2020/03/Deku.jpg"
        },
        {
            name: "Avi",
            url: 
                "https://pht.qoo-static.com/kdVmKZQjphHVYGOlp9bjSIz-30-VkW26byn4pIb-7RZdb6Bv_44IQHS49x9fOr2-eg=w512"
        }
    ])
    return (
        <div className="tinder__cards">
            <div className = "tinderCards__cardContainer" >
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={"up", "down"}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={()=> outOfFrame(person.name)}>
                    
                </TinderCard>     
            ))}  
            </div>
             
        </div>
    )
}

export default TinderCards

