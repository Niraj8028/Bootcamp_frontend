
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Signup.css'


function Signup() {
    let navigate=useNavigate();

    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [city, setCity] = useState("")
    const [password, setPassword] = useState("")


    // const login = (e) => {
    //     e.preventDefault();
    //     auth.signInWithEmailAndPassword(email,password)
    //     .then((auth)=>{
    //         console.log("success");
    //         navigate("/")
    //     })
    //     .catch(event=>alert(event.message))
        
        
    // }
    // const register = (e) => {
    //     e.preventDefault();
    //    auth.createUserWithEmailAndPassword(email,password)
    //    .then((auth)=>{
    //     navigate("/")
    //    })
    //    .catch(event=>alert(event.message))
    // }



    return (
        <div className='signin'>
            {/* <Link to="/">
                <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link> */}

            <div className='signin_container'>
                <h1 className='tittle'>Signup</h1>
                <div className='signin__form'>
                    <form>
                        <h5>Firstname</h5>
                        <input value={firstname} onChange={(e) =>
                                setFirstname(e.target.value)
                            } type="text"></input>


                        <h5>Lastname</h5>
                        <input value={lastname} onChange={(e) =>
                                setLastname(e.target.value)
                            } type="text"></input>


                        <h5>City</h5>
                        <input value={city} onChange={(e) =>
                                setCity(e.target.value)
                            } type="text"></input>


                        <h5>E-mail</h5>
                        <input value={email} onChange={(e) =>
                                setEmail(e.target.value)
                            } type="email"></input>


                        <h5>Password</h5>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password"></input>

                        <p> Please see our Privacy Notice,.our cookies Notice and Interest-based Ads Notice</p>
                        <button className='signin_btn'>Sign Up</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup