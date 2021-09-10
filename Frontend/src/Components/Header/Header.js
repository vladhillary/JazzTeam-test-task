import React from 'react'
import Nav from './Nav.js'
import './header.css'
import Logo from './Logo'
import User from './User.jsx'
import Logout from './Logout.js'

import {  useSelector } from 'react-redux'

function Header() {

    const state = useSelector(state => state.admin)

    return (
        <div className='container'>
            <Logo />
            <div className='panel_wrapper'>
                <Nav />
                {state.auth &&
                    <>
                        <User />
                        <Logout />
                    </>}

            </div>

        </div>
    )
}

export default Header

