import React, { useState, useEffect } from 'react'
import "./Profile.css"
import UserCard from '../UserCard/UserCard'
import { isAuthenticated } from '../Helper/Helper'
import EvenCard from '../Eventcard/EvenCard'
import FriendCard from '../FriendCard/FriendCard'

function Profile() {

  const [user, setUser] = useState([])

  const [api, setApi] = useState([])
  const [selected, setSelected] = useState([])
  const [interest, setInterest] = useState("")
  const [interests, setInterests] = useState([])
  const [friend, setFriend] = useState([])
  const [event, setEvent] = useState([])
  const userId = isAuthenticated();

  const userid = isAuthenticated();

  let size=interests.length;
  let size1=friend.length;
  let size2=event.length;

  // console.log("size os]",size)

  const getUserInterests = () => {
    return fetch(`http://localhost:9090/user/interests/${userId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };


  const getEvents = () => {
    return fetch(`http://localhost:9090/user/events/${userId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  const getFriends = () => {
    return fetch(`http://localhost:9090/friends/${userId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  const getUserData = () => {
    return fetch(`http://localhost:9090/user/${userId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  }
  const loadAllResults = () => {

    getUserData().then(data => {
      // console.log("userdata", data)
      setUser(data)
    })
    getUserInterests().then(data => {
      // console.log("interests", data)
      setInterests(data)
    })
    getFriends().then(data => {
      // console.log("interests", data)
      setFriend(data)
    })
    getEvents().then(data => {
      console.log("events", data)
      setEvent(data)
    })
    
  }

  useEffect(() => {
    loadAllResults();
    fetch("http://localhost:9090/interests").then(data => data.json())
      .then(

        val => setApi(val)

      )
  }, []);

  const handleChnage = async (e, index) => {

    setInterest(e.target.value)
    console.log("interst", interest);

    const activeData = document.getElementById(index).checked
    console.log(activeData, "activeData")
    if (activeData == true) {
      let result = await fetch(`http://localhost:9090/add/interest/${userId}/${interest}`, {
        method: 'Put'
      })
      // result=await result.json();
      console.log(result);
      setSelected(oldData => [...oldData, e.target.value])
    } else {
      setSelected(selected.filter(values => values !== e.target.value))
    }

  }

  return (
    <div className="profile_page">



      <div class="container">
        <div class="page-content page-container" id="page-content">
          <div class="padding">
            <div class="row container d-flex justify-content-center">
              <div class="col-xl-6 col-md-12">

                <div class="card user-card-full">
                  <div class="row m-l-0 m-r-0">
                    <div class="col-sm-4 bg-c-lite-green user-profile">
                      <div class="card-block text-center text-white">
                        <div class="m-b-25">
                          <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" />
                        </div>
                        <h6 class="f-w-600">{user.firstName} {user.lastName}</h6>
                        <p><i class="fa-solid fa-house"></i> {user.city}</p>
                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="card-block">
                        <h6 class="m-b-20 p-b-5 b-b-default f-w-600"><i class="fa-solid fa-circle-info"></i> User Information</h6>
                        <div class="row">
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600"><i class="fa-solid fa-envelope"></i> Email</p>
                            <h6 class="text-muted f-w-400">{user.email}</h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600"><i class="fa-solid fa-phone"></i> Phone</p>
                            <h6 class="text-muted f-w-400">98979989898</h6>
                          </div>
                        </div>
                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Interests</h6>
                        <div class="row">
                          {
                            selected.map((a, i) =>


                              <div class="col-sm-6" key={i}>
                                <p class="m-b-10 f-w-600"><i class="fa-sharp fa-solid fa-circle-dot"></i> {a}</p>

                              </div>
                            )
                          }

                          {
                                                      size!=0 && size!=undefined && interests.map((a, i) =>


                                                          <div class="col-sm-6" key={i}>
                                                              <p class="m-b-10 f-w-600"><i class="fa-sharp fa-solid fa-circle-dot"></i> {a.interestName}</p>

                                                          </div>
                                                      )
                                                  } 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="interests">
        <h5>Interests</h5>
        {
          api.map((fruit, i) =>
            <div className="check" key={i}>
              <input id={i} type="checkbox" value={fruit.interestName} onChange={(e) => handleChnage(e, i)} /><span>     {fruit.interestName}</span>
            </div>
          )
        }

      </div>
      <div className='friends'>
      <h4><i class="fa-solid fa-user-group"></i>  Friends</h4>

      {
                size1!=0 && size1!=undefined && friend.map((user,index) => (
                    <div>
                        <FriendCard user={user} key={index}/>
                    </div>
                    ))
                }
      </div>

      {/* <div className='events'> */}
      {/* <h4><i class="fa-solid fa-calendar"></i>  Registered Events</h4>

      {
                size2!=0 && size2!=undefined && event.map((user,index) => (
                    <div>
                        <UserCard event={user} key={index}/>
                    </div>
                    ))
                }
      </div> */}
        
        
    </div>
  )
}

export default Profile