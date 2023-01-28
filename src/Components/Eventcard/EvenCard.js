import React from 'react'
import "./EventCard.css"

function EvenCard() {
  return (
    <div class="card card-1">
      <div class="card__icon">City</div>
      <p class="card__exit">Date</p>
      <h2 class="card__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <p class="card__apply">
        <a class="card__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    // <div class="cards">
    // <div class="card card-1">
    //   <p class="card__exit">Date</p>

    //   <h2 class="card__title">Lorem ipsum dolor sit amet,.</h2>
      
    //   <div class="card__icon"><i class="fas fa-bolt"></i></div>

    //   <p class="card__apply">
    //     <a class="card__link" href="#">Register Now <i class="fas fa-arrow-right"></i></a>
    //   </p>
    // </div>
    // </div>
  )
}

export default EvenCard
