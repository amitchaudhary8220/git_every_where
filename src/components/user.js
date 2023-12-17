import React from 'react'
import { useNavigate } from 'react-router-dom'

export const User = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate(`/user/details/1`)
        
    }
  return (
    <>
    <div>User</div>
    <button onClick={handleClick}>user details</button>
    </>
  )
}
