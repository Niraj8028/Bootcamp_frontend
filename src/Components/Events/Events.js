import React,{useState,useEffect} from 'react'
import { isAuthenticated } from '../Helper/Helper'
import UserCard from '../UserCard/UserCard'
import "./Events.css"

function Events() {
    const [events, setEvents] = useState([])
    // const [city, setCity] = useState([])
    const [interest, setInterest] = useState([])
    const [eventsCity, setEventsCity] = useState([])
    const [eventsInt, setEventsInt] = useState([])
    const [user, setUser] = useState([])
    const [suggest, setSuggest] = useState([])
    const userId = isAuthenticated();
    // const city=localStorage.getItem('city');

    const getAllEvents = async () => {
        return fetch("http://localhost:9090/events", {
            method: 'Get'
        }).then(Response => {
            // console.log(Response.json());
            return Response.json();
        }).catch(err => console.log(err))
    }

    const getUserData = () => {
        return fetch(`http://localhost:9090/user/${userId}`, {
          method: "GET"
        })
          .then(response => {
            return response.json();
          })
          .catch(err => console.log(err));
      }

    const getUserInterests = () => {
        return fetch(`http://localhost:9090/user/interests/${userId}`, {
          method: "GET"
        })
          .then(response => {
            return response.json();
          })
          .catch(err => console.log(err));
      };

    const getEventsInt = () => {
        return fetch(`http://localhost:9090/user/events/Music`, {
          method: "GET"
        })
          .then(response => {
            return response.json();
          })
          .catch(err => console.log(err));
      };

    const getEventsCity = () => {
       
        return fetch(`http://localhost:9090/user/event/${user.city}`, {
          method: "GET"
        })
          .then(response => {
            return response.json();
          })
          .catch(err => console.log(err));

      };
    const getSuggEvents = () => {
        return fetch(`http://localhost:9090/event/${user.city}/Coding`, {
          method: "GET"
        })
          .then(response => {
            return response.json();
          })
          .catch(err => console.log(err));
      };


    

    const loadAllEvents = () => {
        getAllEvents().then(data => {    
            console.log(data)       
            setEvents(data)
        })
        getUserData().then(data => {    
            console.log("user",data)       
            setUser(data)
        })
        getUserInterests().then(data => {    
            console.log("interests",data)       
            setInterest(data)
        })
        getEventsInt().then(data => {    
            console.log("int",data)       
            setEventsInt(data)
        })
        
            getEventsCity().then(data => {    
                console.log("city",data)       
                setEventsCity(data)
            })
            getSuggEvents().then(data => {    
                console.log("sugg",data)       
                setSuggest(data)
            })
        }
            
        

    useEffect(() => {
        loadAllEvents()
    }, [])

  return (
    <div>
    <div class="results">
        <h2 className='title'>All Events</h2>
                {
                    events.map(event => (
                    <div>
                        <UserCard event={event}/>
                    </div>
                    ))
                }
            </div>

            </div>
            
  )
}

export default Events
