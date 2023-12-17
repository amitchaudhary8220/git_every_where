import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllNavbar from './components/AllNavbar'
import { Dashboard } from './components/Dashboard'
import { OnlyTopbar } from './components/OnlyTopbar'
import { Home } from './Home'
import SuspenseComp from './components/Suspense'

export  const Routers = () => {
  return (
    
    <Routes>
          <Route element={<AllNavbar />}>
            <Route path='/dashboard' element={<Dashboard />} />



          </Route>
          <Route element={<OnlyTopbar/>} >
          <Route path="/" element={<Home/>} />
          <Route path='/loading' element={<SuspenseComp/>} />


          </Route>


        </Routes>
  )
}
