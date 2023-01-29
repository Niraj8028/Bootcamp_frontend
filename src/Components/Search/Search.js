import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EvenCard from '../Eventcard/EvenCard';


function Search() {
    const navigate = useNavigate();

    // const [search, setSearch] = useState("");
    const [city, setCity] = useState([]);
    const [interests, setInterests] = useState([]);
    const [user, setUser] = useState([]);
    const search=localStorage.getItem("Search");

    console.log(search);

    
    const getEventsCity = async () => {
        return fetch(`http://localhost:9090/event/${search}`, {
            method: 'Get'
        }).then(Response => {
            // console.log(Response.json());
            return Response.json();
        }).catch(err => console.log(err))
    }

    const getEventsInterest = async () => {
        return fetch(`http://localhost:9090/events/${search}`, {
            method: 'Get'
        }).then(Response => {
            // console.log(Response.json());
            return Response.json();
        }).catch(err => console.log(err))
    }

    const getUser = async () => {
        return fetch(`http://localhost:9090/search/${search}`, {
            method: 'Get'
        }).then(Response => {
            // console.log(Response.json());
            return Response.json();
        }).catch(err => console.log(err))
    }

    const loadAllResults = () => {
       
      
        getEventsCity().then(data => {
            console.log("Pune", data)
            setCity(data)
        })
        getEventsInterest().then(data => {
            console.log("interests", data)
            setInterests(data)
        })
        getUser().then(data => {
            console.log("interests", data)
            setUser(data)
        })

        
        
        
    }
    useEffect(() => {
        loadAllResults();
    }, [])
    

  return (
    <div>
      <h1>Search</h1>
      {
                    user.map((user,index) => (
                    <div>
                        <EvenCard user={user} key={index}/>
                    </div>
                    ))
                }

    </div>
  )
}

export default Search
