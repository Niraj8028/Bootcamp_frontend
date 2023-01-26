
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
                <Link to="">Profile</Link>
                <Link to="">Interests</Link>
                
            </div>
            <div className='headerRight'>
            <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                
            </div>

        </div>
    )
}

export default Navbar