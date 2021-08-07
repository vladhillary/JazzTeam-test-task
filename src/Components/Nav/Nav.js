import React from 'react'
import { NavLink } from "react-router-dom"

function Nav({ activeUser, setActiveuser }) {

    let userCheck = JSON.parse(window.localStorage.getItem('admin'))

    if (userCheck?.auth === true) {
        if (!activeUser) setActiveuser(true)
    }
    return (
        <nav className='nav'>
            <ul className='nav_items'>
                <NavLink exact to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink to={activeUser ? '/profile' : '/login'} >
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
