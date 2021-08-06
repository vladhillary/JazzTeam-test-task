import React from 'react'
import { NavLink } from "react-router-dom"

function Nav() {
    return (
      <nav className='nav'>
           <ul className='nav_item'>
                <NavLink exact to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/login'>
                    <li>SignIn</li>
                </NavLink>
                <NavLink to='/profile'>
                    <li>Profile</li>
                </NavLink>
                <NavLink to='/info'>
                    <li>Info</li>
                </NavLink>
            </ul >
      </nav>
    )
}

export default Nav
