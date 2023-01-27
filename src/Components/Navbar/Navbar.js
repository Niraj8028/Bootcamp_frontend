
import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar() {
    // const auth = isAuthenticated();
    // const navigate = useNavigate();

    // const logout = () => {
    //     localStorage.clear();
    //     navigate('/login')
    // }

    return (
        <div className='nav-items'>
            <div className='headerLeft'>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/events">events</Link>

            </div>
            <span><i class="bx bx-search search-toggle">Search</i></span>

            <div class="search-block">
                <form class="search-form">                    
                    <input type="search" name="search" class="search-input" placeholder="Search here..." />
                </form>
            </div>

            <div className='headerRight'>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>

            </div>

        </div>
    )
}

export default Navbar