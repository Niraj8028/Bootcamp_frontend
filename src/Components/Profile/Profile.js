import React,{useState,useEffect} from 'react'
import "./Profile.css"
import UserCard from '../UserCard/UserCard'

function Profile() {

    const [interests, setInterests] = useState([])
    const [events, setEvents] = useState([])

    const getAllCategories = () => {
        return fetch("http://localhost:9091/interests", {
          method: "GET" 
        })
        .then(response => {
        return response.json();
        })
        .catch(err => console.log(err));
      };

      const getAllEvents = () => {
        return fetch(`http://localhost:9091/user/events/101`, {
          method: "GET" 
        })
        .then(response => {
        return response.json();
        })
        .catch(err => console.log(err));
      };
    

    const loadData=()=>{
        getAllCategories().then((data)=>{
            console.log(data)       
                setInterests("interests",data)  
        })
        getAllEvents().then((data)=>{
            console.log("events",data)       
                setEvents(data)  
        })
    }
    useEffect(()=>{
       loadData();
        
    },[])

  return (
    <div class="container">
        <h1>interests</h1>
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

export default Profile
