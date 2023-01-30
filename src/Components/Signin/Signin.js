
import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Signin.css'


function Signin() {
    let navigate=useNavigate();

    const [email, setEmail] = useState("sachi@gmail.com")
    const [password, setPassword] = useState("123456")

    useEffect(()=>{
        const auth=localStorage.getItem('User');
        if(auth){
          navigate('/profile')
        }
    
      },[])

    const handleclick=async()=>{
        console.log({email,password});
        let result=await fetch('http://localhost:9090/signIn',{
          method:'POST',
          body:JSON.stringify({email,password}),
          headers:{
            'Content-Type':'application/JSON'
          }
        })

        result=await result.json();
        console.log("result",result)
        if(result){
            localStorage.setItem('User',JSON.stringify(result.id));
            localStorage.setItem('city',JSON.stringify(result.city));
           
            navigate("/events")
            
        }
        
      }
      const nav=()=>{
        navigate("/signup")
      }
    
    



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
                             
                            className='signin_btn' onClick={handleclick}>Sign in</button>

                        <p> Please see our Privacy Notice,.our cookies Notice and Interest-based Ads Notice</p>
                       <button 
                          className='create_btn' onClick={nav} >Create your Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin