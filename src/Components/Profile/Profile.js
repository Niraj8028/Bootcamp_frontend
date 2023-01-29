import React, { useState, useEffect } from 'react'
import "./Profile.css"
import UserCard from '../UserCard/UserCard'
import { isAuthenticated } from '../Helper/Helper'
import Checkbox from '../Checkbox/Checkbox'

function Profile() {

  const [interests, setInterests] = useState([])
  const [allInterests, setAllinterests] = useState([])
  const [events, setEvents] = useState([])
  const [user, setUser] = useState([])

  let userId = isAuthenticated();


  const getUserInterests = () => {
    return fetch(`http://localhost:9090/user/interests/${userId}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  const getAllInterests = () => {
    return fetch(`http://localhost:9090/interests`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  const getRegEvents = () => {
    return fetch(`http://localhost:9090/user/events/${userId}`, {
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


  const loadData = () => {
    getUserInterests().then((data) => {
      console.log("interests", data)
      setInterests(data)
    })
    getRegEvents().then((data) => {
      console.log("events", data)
      setEvents(data)
    })
    getUserData().then((data) => {
      console.log("profile", data)
      setUser(data)
    })
    getAllInterests().then((data) => {
      console.log("all", data)
      setAllinterests(data)
    })



  }
  useEffect(() => {
    loadData();

  }, [])

  return (
    <div className='profilepage'>
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
                        <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/>
                      </div>
                      <h6 class="f-w-600">Niraj Pardeshi</h6>
                      <p>{user.city}</p>
                      <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="card-block">
                      <h6 class="m-b-20 p-b-5 b-b-default f-w-600"> User Information</h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Email</p>
                          <h6 class="text-muted f-w-400">{user.email}</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Phone</p>
                          <h6 class="text-muted f-w-400">98979989898</h6>
                        </div>
                      </div>
                      <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Interests</h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Recent</p>
                          <h6 class="text-muted f-w-400">Sam Disuja</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Most Viewed</p>
                          <h6 class="text-muted f-w-400">Dinoter husainm</h6>
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
      </div>
      <div className='interests'>
      < Checkbox/>

      </div>

    </div>
  )
}

export default Profile
