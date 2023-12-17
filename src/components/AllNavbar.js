import React from 'react'
import { Outlet } from 'react-router-dom'
import { Topnavbar } from './Topnavbar'
import { Bottomnavbar } from './Bottomnavbar'

const AllNavbar = () => {
    console.log('all nav baat is fired')
  return (
    <div>
        <Topnavbar/>
        <Bottomnavbar />

        <Outlet/>
    </div>
  )
}

export default AllNavbar