
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
                
                <li><Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link></li>
                <Link to="/movies">Popular</Link>               
               <div>
                <Link to="/admin/movies">Movies</Link>
                <Link to="/add/movie">Add Movie</Link>
                <Link to="/add/category">Add Category</Link>
                <Link to="/add/actor">Add Actor</Link>
                <Link to="/add/producer">Add Producer</Link>
                </div>            
            </div>
            <div className='headerRight'>
                 
                <div><Link to="/login">Admin</Link>
                    <Link to="/signup">Signup</Link>
                </div>
               (<Link  to="/signup">Logout</Link>)
            </div>

        </div>
    )
}

export default Navbar