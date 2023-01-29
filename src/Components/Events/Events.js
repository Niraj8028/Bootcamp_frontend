import React,{useState,useEffect} from 'react'
import UserCard from '../UserCard/UserCard'
import "./Events.css"

function Events() {
    const [events, setEvents] = useState([])

    const getAllEvents = async () => {
        return fetch("http://localhost:9092/events", {
            method: 'Get'
        }).then(Response => {
            // console.log(Response.json());
            return Response.json();
        }).catch(err => console.log(err))
    }

    const loadAllEvents = () => {
        getAllEvents().then(data => {    
            console.log(data)       
            setEvents(data)
        })
    }

    useEffect(() => {
        loadAllEvents()
    }, [])

  return (
    <div class="cards">
                {
                    events.map(event => (
                    <div>
                        <UserCard event={event}/>
                    </div>
                    ))
                }
            </div>
            
  )
}

export default Events
