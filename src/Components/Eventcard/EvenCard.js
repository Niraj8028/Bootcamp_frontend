import React from 'react'
import { isAuthenticated } from '../Helper/Helper'
import "./EventCard.css"
import { Link, useNavigate } from 'react-router-dom'


function EvenCard({user}) {
  console.log(user.email);
    let userid=isAuthenticated();
    let navigate=useNavigate();


  const followUser=async()=>{
    
    let result=await fetch(`http://localhost:9090/add/${userid}/to/${user.id}`,{
      method:'Put',
      
    })
    result=await result.json();
    console.log("result",result)
  }

  const viewProfile=async()=>{
    navigate(`/profile/${user.id}`);
    // let result=await fetch(`http://localhost:9090/user/${user.id}`,{
    //   method:'Get',
      
    // })
    // result=await result.json();
    // console.log("result",result)
    

  }


  return (
    
    
			<div class="profile">
			
				<div class="profile-userpic">
					<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" class="img-responsive" alt=""/>
				</div>
			
				<div class="profile-usertitle">
					<div class="profile-usertitle-name">
						{user.firstName} {user.lastName}
					</div>
					<div class="profile-usertitle-job">
						{user.email}
					</div>
				</div>
				
				<div class="profile-userbuttons">
					<button type="button" class="btn btn-success btn-sm" onClick={followUser}>Follow</button>
					<button type="button" class="btn btn-danger btn-sm" onClick={viewProfile}>View Profile</button>
				</div>
			
				
	
			</div>
		
  )
}

export default EvenCard
