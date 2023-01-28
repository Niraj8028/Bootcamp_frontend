import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

export const isAuthenticated = () => {
    
    if(localStorage.getItem("User")){
        return JSON.parse(localStorage.getItem("User"));
    }
    else{
        return false;
    }
  };

  const PrivateRoutes=()=> {
    let auth=isAuthenticated();
    console.log("auth",auth)
    return (auth) ?<Outlet/>:<Navigate to="/login" />
}

export default PrivateRoutes