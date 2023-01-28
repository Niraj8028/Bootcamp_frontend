import React from 'react'
import "./UserCard.css"

function UserCard({event}) {
  console.log()
  return (
    <div class="card">
       
        
            
           

            <div class="eventcard card-1">
      <div class="card_icon">{event.city}</div>
      <p class="card__exit">Date</p>
      <h2 class="card__title">{event.eventName}  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <p class="card_apply">
        <a class="card_link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
        
    </div>
  )
}

export default UserCard
