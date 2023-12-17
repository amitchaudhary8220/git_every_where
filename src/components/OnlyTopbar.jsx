import React from 'react'
import { Topnavbar } from './Topnavbar'
import { Outlet } from 'react-router-dom'

export const OnlyTopbar = () => {
    
  return (
    <div>
        <Topnavbar/>
        <Outlet/>
        
    </div>
  )
}
