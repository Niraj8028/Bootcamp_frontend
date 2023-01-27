import React from 'react'
import "./UserCard.css"

function UserCard({event}) {
  return (
    <div class="card">
        <div class="card_background_img"></div>
        <div class="card_profile_img"></div>
        <div class="user_details">
            <h3>{event.eventName}</h3>
            <p>{event.city} </p>
        </div>
        <div class="card_count">
            
             <div class="btn">Follow</div>
        </div>
    </div>
  )
}

export default UserCard
