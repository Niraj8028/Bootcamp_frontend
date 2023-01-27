import React,{useState,useEffect} from 'react'
import event1 from "./Images/1.jpg"
import event2 from "./Images/2.jpg"
import event3 from "./Images/3.png"
import "./Homepage.css"
import { Carousel } from 'react-responsive-carousel';


function Homepage() {
    const movies=[event1,event2,event3];
    const [eventsPune, setEventsPune] = useState([])
    const [eventsDelhi, setEventsDelhi] = useState([])
    const [eventsCoding, setEventsCoding] = useState([])

    const getPuneEvents = async () => {
        return fetch("http://localhost:9091/event/Pune", {
            method: 'Get'
        }).then(Response => {
            // console.log(Response.json());
            return Response.json();
        }).catch(err => console.log(err))
    }
    const getDelhiEvents = async () => {
        return fetch("http://localhost:9091/event/Delhi", {
            method: 'Get'
        }).then(Response => {
            // console.log(Response.json());
            return Response.json();
        }).catch(err => console.log(err))
    }
    const getCodingEvents = async () => {
        return fetch("http://localhost:9091/events/Coding", {
            method: 'Get'
        }).then(Response => {
            // console.log(Response.json());
            return Response.json();
        }).catch(err => console.log(err))
    }


    const loadAllEvents = () => {
        getPuneEvents().then(data => {    
            console.log("Pune",data)       
            setEventsPune(data)
        })
        getDelhiEvents().then(data => {    
            console.log("delhi",data)       
            setEventsDelhi(data)
        })
        getCodingEvents().then(data => {    
            console.log("Coding",data)       
            setEventsCoding(data)
        })
    }

    useEffect(() => {
        loadAllEvents()
    }, [])


    
  return (
    <div className='home'>
            
             
    </div>
  )
}

export default Homepage
