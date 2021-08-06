import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

function Nav() {
    const [auth, setAuth] = useState(false)
    let userCheck = JSON.parse(window.localStorage.getItem('admin')) 
    if (userCheck.login === 'Admin' && userCheck.password === '12345678') {
        console.log('123')
        if(!auth) setAuth(true)
    }
    return (
        <nav className='nav'>
            <ul className='nav_items'>
                <NavLink exact to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink to={auth ? '/profile' : '/login'} >
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
