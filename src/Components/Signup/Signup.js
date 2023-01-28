
import React, { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './Signup.css'


function Signup() {
    let navigate=useNavigate();

    const [email, setEmail] = useState("niraj@gmail.com")
    const [firstName, setFirstName] = useState("niraj")
    const [lastName, setLastName] = useState("pardeshi")
    const [city, setCity] = useState("Pune")
    const [pwd, setPwd] = useState("123456")


    useEffect(()=>{
        const auth=localStorage.getItem('User');
        if(auth.id){
          navigate('/events')
        }
    
      },[])

    const handleClick=async()=>{
        console.log(email,pwd,firstName);
        let result=await fetch('http://localhost:9090/registerUser',{
            method:'Post',
            body: JSON.stringify({firstName,lastName,email,pwd}),
            headers:{
              'Content-Type': 'application/json'
            }

        })
        result=await result.json();
        console.log(result);
        
        if(result){
            navigate('/events')        
          }
        localStorage.setItem('User',JSON.stringify(result.id));
        localStorage.setItem('token',JSON.stringify(result.email));
        // localStorage.setItem('token',JSON.stringify(result.auth));

        
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
                        <input value={pwd} onChange={e => setPwd(e.target.value)} type="password"></input>

                        <p> Please see our Privacy Notice,.our cookies Notice and Interest-based Ads Notice</p>
                        <button className='signin_btn' onClick={handleClick}>Sign Up</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup