import React,{useState,useEffect} from 'react'
import UserCard from '../UserCard/UserCard'
// UserCard

function Users() {
    
        const [users, setUsers] = useState([])
    
        const getAllEvents = async () => {
            return fetch("http://localhost:9092/users", {
                method: 'Get'
            }).then(Response => {
                // console.log(Response.json());
                return Response.json();
            }).catch(err => console.log(err))
        }
    
        const loadAllEvents = () => {
            getAllEvents().then(data => {    
                console.log(data)       
                setUsers(data)
            })
        }
    
        useEffect(() => {
            loadAllEvents()
        }, [])
    
      return (
        <div className="popular_card">
                    {
                        users.map(user => (
                        <div>
                            <UserCard key={user.id} event={user}/>
                        </div>
                        ))
                    }
                </div>
      )
    }
  

export default Users
