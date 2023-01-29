import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EvenCard from '../Eventcard/EvenCard';
import UserCard from '../UserCard/UserCard';
import "./Search.css"

function Search() {
    const navigate = useNavigate();

    // const [search, setSearch] = useState("");
    const [city, setCity] = useState([]);
    const [interests, setInterests] = useState([]);
    const [user, setUser] = useState([]);
    const search=localStorage.getItem("Search");

    let flag1=false;
    let flag2=false;
    let flag3=false;

    console.log(search);

    const size1=city.length;
    console.log("size city",size1)

    const size2=user.length;
    console.log("size user",size2)

    const size3=interests.length;
    console.log("size interest",size3)

    
    const getEventsCity = async () => {
        return fetch(`http://localhost:9090/event/${search}`, {
            method: 'Get'
        }).then(Response => {
            // console.log(Response.json());
            flag3=true;

            return Response.json();
        }).catch(err => console.log(err))
    }

    const getEventsInterest = async () => {
        return fetch(`http://localhost:9090/events/${search}`, {
            method: 'Get'
        }).then(Response => {
            // console.log(Response.json());
            flag3=true;

            return Response.json();
        }).catch(err => console.log(err))
    }

    const getUser = async () => {
        return fetch(`http://localhost:9090/search/${search}`, {
            method: 'Get'
        }).then(Response => {
            // console.log(Response.json());
            flag1=true;

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
      <h2 className='title'>Search results for {search}</h2>
      <div className='results'>
        
        {
                size2!=0 && user.map((user,index) => (
                    <div>
                        <EvenCard user={user} key={index}/>
                    </div>
                    ))
                }
        

        
        {
                size1!=0 && city.map((user,index) => (
                    <div>
                        <UserCard event={user} key={index}/>
                    </div>
                    ))
                }
    
      
            {
                size3!=0 && interests.map((user,index) => (
                    <div>
                        <UserCard event={user} key={index}/>
                    </div>
                    ))
                }
      
                </div>

    </div>
  )
}

export default Search
