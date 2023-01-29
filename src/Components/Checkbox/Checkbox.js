import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../Helper/Helper";
import "./Checkbox.css"

function Checkbox() {

    const [api, setApi] = useState([])
    const [selected, setSelected] = useState([])
    const [interest, setInterest] = useState("")
    const userId=isAuthenticated();
    
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
        <div className="checkbox">
            <h3>Add Interests</h3>
            {
                api.map((fruit, i) =>
                    <div className="check"  key={i}>
                        <input id={i} type="checkbox" value={fruit.interestName} onChange={(e) => handleChnage(e, i)} /><span>{fruit.interestName}</span>
                    </div>
                )
            }
            <br />
            {
                selected.map((a, i) => <div key={i}>{a}</div>)
            }
        </div>
    )
}

export default Checkbox
