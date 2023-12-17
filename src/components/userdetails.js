import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const    UserDetails = () => {
    const {pathname}=useLocation();

    console.log('pathname is ',pathname)
    
    const navigate=useNavigate();

    const {id,...ram}=useParams();

    console.log('id of user is',id,'and ram is ',ram['*']);

    const handleClick=()=>{
        
        navigate(`/user/details/${ram['*']}/${Math.floor((Math.random())*100)}`);

    }

    useEffect(()=>{
        console.log('user details page is rendered again');
    },[pathname])
  return (
    <>
    <div>{`userdetails page  `}</div>
    <button onClick={handleClick}>userdetails button </button>
    <div>yes made first commit </div>
    </>
  )
}

