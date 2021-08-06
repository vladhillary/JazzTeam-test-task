import React from 'react'
import logo from '../img/fake_logo.png'
import { NavLink } from "react-router-dom"

function Logo() {
    return (
        <NavLink exact to='/'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        </NavLink>
    )
}

export default Logo
