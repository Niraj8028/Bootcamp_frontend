
import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../Helper/Helper';
import Search from '../Search/Search';

import './Navbar.css'

function Navbar() {
    const auth = isAuthenticated();
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [city, setCity] = useState([]);
    const [interests, setInterests] = useState([]);
    const [user, setUser] = useState([]);

    console.log(search);

    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }

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
        localStorage.setItem('Search',search);
        navigate("/search");
        setSearch("")
        
        // getEventsCity().then(data => {
        //     console.log("Pune", data)
        //     setCity(data)
        // })
        // getEventsInterest().then(data => {
        //     console.log("interests", data)
        //     setInterests(data)
        // })
        // getUser().then(data => {
        //     console.log("user", data)
        //     setUser(data)
        // })
   
    }

    


    return (
        <div className='nav-items'>
            <div className='headerLeft'>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/events">Events</Link>
            </div>
            {/* <div className='header__search'>
                <input type="text" className='header__searchInput'/>
                {/* <SearchIcon className='header__searchIcon'/> */}
                {/* <i className='' class="fa-solid fa-magnifying-glass"></i> */}
            {/* </div> */} 

            <div className='search'>
            <input type="text" placeholder="Search.." value={search} onChange={e=>setSearch(e.target.value)}/>

                <button onClick={loadAllResults} type="submit"><i class="fa fa-search"></i></button>

            </div>
            <div className='headerRight'>
                {/* {!auth && (<div><Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>)} */}
                {auth ? (<Link onClick={logout} to="/signup">Logout</Link>) : (<div><Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>)}
            </div>
            {/* <Search search={search}/> */}

        </div>
    )
}

export default Navbar