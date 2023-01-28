import React,{useState,useEffect} from 'react'
import "./Profile.css"
import UserCard from '../UserCard/UserCard'
import { isAuthenticated } from '../Helper/Helper'

function Profile() {

    const [interests, setInterests] = useState([])
    const [allInterests, setAllinterests] = useState([])
    const [events, setEvents] = useState([])
    const [user, setUser] = useState([])
    
    let userId=isAuthenticated();
    

    const getUserInterests = () => {
        return fetch(`http://localhost:9091/user/interests/${userId}`, {
          method: "GET" 
        })
        .then(response => {
        return response.json();
        })
        .catch(err => console.log(err));
      };

    const getAllInterests = () => {
        return fetch(`http://localhost:9091/interests`, {
          method: "GET" 
        })
        .then(response => {
        return response.json();
        })
        .catch(err => console.log(err));
      };

      const getAllEvents = () => {
        return fetch(`http://localhost:9091/user/events/${userId}`, {
          method: "GET" 
        })
        .then(response => {
        return response.json();
        })
        .catch(err => console.log(err));
      };
    
      const getUserData=()=>{
        return fetch(`http://localhost:9091/user/${userId}`, {
          method: "GET" 
        })
        .then(response => {
        return response.json();
        })
        .catch(err => console.log(err));
      }


    const loadData=()=>{
        getUserInterests().then((data)=>{
            console.log("interests",data)       
                setInterests(data)  
        })
        getAllEvents().then((data)=>{
            console.log("events",data)       
                setEvents(data)  
        })
        getUserData().then((data)=>{
            console.log("profile",data)       
                setUser(data)  
        })
        getAllInterests().then((data)=>{
            console.log("all",data)       
                setAllinterests(data)  
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
