import React from 'react'
import { NavLink } from "react-router-dom"

import { useSelector } from 'react-redux'

function Nav() {

    const state = useSelector(state => state.admin)


    return (
        <nav className='nav'>
            <ul className='nav_items'>
                <NavLink exact to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink to={state.auth ? '/profile' : '/login'} >
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
