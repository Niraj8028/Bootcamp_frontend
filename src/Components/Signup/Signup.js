
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Signup.css'


function Signup() {
    let navigate=useNavigate();

    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
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
    // const navigate=useNavigate();

    // useEffect(()=>{
    //   const auth=localStorage.getItem('User')
    //   if(auth){
    //     navigate('/')
    //   }
    // })

    const handleClick=async()=>{
        console.log(email,password,city,firstName,lastName);
        let result=await fetch('http://localhost:9091/add/user',{
            method:'Post',
            body: JSON.stringify({firstName,lastName,email,password,city}),
            headers:{
              'Content-Type': 'application/json'
            }

        })
        result=await result.json();
        console.log(result);
        // localStorage.setItem('User',JSON.stringify(result.user));
        // localStorage.setItem('token',JSON.stringify(result.auth));

        // if(result){
        //   navigate('/')        
        // }
    }


    return (
        <div className='signin'>
            {/* <Link to="/">
                <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link> */}

            <div className='signin_container'>
                <h1 className='tittle'>Register</h1>
                <div className='signin__form'>
                    <form>
                        <h5>Firstname</h5>
                        <input value={firstName} onChange={(e) =>
                                setFirstName(e.target.value)
                            } type="text"></input>


                        <h5>Lastname</h5>
                        <input value={lastName} onChange={(e) =>
                                setLastName(e.target.value)
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
                        <button className='signin_btn' onClick={handleClick}>Sign Up</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup