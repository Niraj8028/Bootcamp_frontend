
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../Helper/Helper';

import './Navbar.css'

function Navbar() {
    const auth = isAuthenticated();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }

    return (
        <div className='nav-items'>
            <div className='headerLeft'>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/events">Events</Link>
            </div>
            <span><i class="bx bx-search search-toggle">Search</i></span>
            <div class="search-block">
                <form class="search-form">                    
                    <input type="search" name="search" class="search-input" placeholder="Search here..." />
                </form>
            </div>
            <div className='headerRight'>                 
                {/* {!auth && (<div><Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>)} */}
                {auth ? (<Link onClick={logout} to="/signup">Logout</Link>):(<div><Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar