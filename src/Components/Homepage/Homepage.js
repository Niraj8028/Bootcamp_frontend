import React from 'react'
import event1 from "./Images/1.jpg"
import event2 from "./Images/2.jpg"
import event3 from "./Images/3.png"
import "./Homepage.css"
import { Carousel } from 'react-responsive-carousel';


function Homepage() {
    const movies=[event1,event2,event3];
  return (
    <div className='home'>
            <Carousel

                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
            >
                {
                    movies.map(movie => (
                        <div>
                            <div className="posterImage">
                                <img className="image" src={movie}  />
                            </div>
                            <div className="overlay">
                                <div className="title">movie.name</div>
                                <div className="release">
                                   Year :<span>movie.release</span> 
                                    <span className="rating">
                                        movie.duration  &#9733;

                                    </span>
                                </div>
                                <div className="description">
                                    <span>movie.description</span>
                                </div>
                            </div>
                            
                        </div>
                        
                    ))
                }
            </Carousel>
             
        </div>
  )
}

export default Homepage
