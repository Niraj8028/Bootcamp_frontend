
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Signin.css'


function Signin() {
    let navigate=useNavigate();

    const [email, setEmail] = useState("")
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
                <h1 className='tittle'>Login</h1>
                <div className='signin__form'>
                    <form>
                        <h5>E-mail</h5>
                        <input value={email} onChange={(e) =>
                                setEmail(e.target.value)
                            } type="email"></input>
                        <h5>Password</h5>
                        <input value={password} onChange={e => setPassword(e.target.value)} type="password"></input>
                        <button 
                             
                            className='signin_btn'>Sign in</button>

                        <p> Please see our Privacy Notice,.our cookies Notice and Interest-based Ads Notice</p>
                       <button 
                          className='create_btn'>Create your Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin