import React from 'react'
import { isAuthenticated } from '../Helper/Helper';
import "./UserCard.css"

function UserCard({ event }) {
  // console.log(event.eventName);
  let userId = isAuthenticated();

  const handleClick = async () => {
    let name = event.eventName;
    console.log(name);

    let result = await fetch(`http://localhost:9090/register/event/${userId}/${name}`, {
      method: 'Put'
    })
    // result=await result.json();
    console.log(result);


  }

  return (
    <div class="card1">

      <div class="card1 card-3">
        <div class="card__icon"><i class="fa-solid fa-calendar-days"></i> {event.date}</div>
        <p class="card__exit"><i class="fa-solid fa-city"></i> {event.city}</p>
        <h2 class="card__title">{event.eventName}</h2>
        <p class="card__apply">
          <a class="card__link" href="#" onClick={handleClick}>Register Now <i class="fas fa-arrow-right"></i></a>
        </p>
      </div>

    </div>
  )
}

export default UserCard
