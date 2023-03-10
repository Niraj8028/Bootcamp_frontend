import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';



function UserProfile() {
    const [user, setUser] = useState([])
  const [interests, setInterests] = useState([])

    const params = useParams();
    const { id } = params;
    console.log("user id", id);

    const getUserData = () => {
        return fetch(`http://localhost:9090/user/${id}`, {
            method: "GET"
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    }
    const getUserInterests = () => {
        return fetch(`http://localhost:9090/user/interests/${id}`, {
          method: "GET"
        })
          .then(response => {
            return response.json();
          })
          .catch(err => console.log(err));
      };

    const loadAllResults = () => {
        getUserData().then(data => {
            console.log("user", data)
            setUser(data)
        })
        getUserInterests().then(data => {
            console.log("user interests", data)
            setInterests(data)
        })

        
    }
    useEffect(() => {
        loadAllResults();
    }, [])

    return (

        <div className='Profile-Page'>
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
                                                <h6 class="f-w-600">{user.firstName} {user.lastName}  </h6>
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
                                                      interests.map((a, i) =>


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
            
        </div>

    )
}

export default UserProfile
