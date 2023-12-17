import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
<div style={{display:"flex",flexDirection:"column"}}>
<Link to={"/"}>Home</Link>
<Link to={"/user"}>User</Link>

</div>
  )
}
