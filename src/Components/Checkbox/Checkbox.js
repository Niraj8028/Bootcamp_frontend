import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../Helper/Helper";
import "./Checkbox.css"

function Checkbox() {

    const [api, setApi] = useState([])
    const [selected, setSelected] = useState([])
    const [interest, setInterest] = useState("")
    const userId = isAuthenticated();

    useEffect(() => {

        fetch("http://localhost:9090/interests").then(data => data.json())
            .then(

                val => setApi(val)

            )

    }, [])

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
        <div className="interests">
            <h3>Add Interests</h3>
            {
                api.map((fruit, i) =>
                    <div className="check" key={i}>
                        <input id={i} type="checkbox" value={fruit.interestName} onChange={(e) => handleChnage(e, i)} /><span>{fruit.interestName}</span>
                    </div>
                )
            }
        
    </div>


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
                                                <h6 class="f-w-600">Niraj Pardeshi</h6>
                                                <p>city</p>
                                                <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                            </div>
                                        </div>
                                        <div class="col-sm-8">
                                            <div class="card-block">
                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600"> User Information</h6>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Email</p>
                                                        <h6 class="text-muted f-w-400">user</h6>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Phone</p>
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

export default Checkbox
