import React from 'react'
import Nav from '../Nav/Nav.js'
import './header.css'
import Logo from './Logo'
import User from './User.jsx'
import Logout from './Logout.js'

function Header({ activeUser, setActiveuser }) {

    const { auth } = JSON.parse(localStorage.getItem('admin'))

    if (!activeUser) {
        if (auth === true) {
            setActiveuser(true)
        }
    }

    return (
        <div className='container'>
            <Logo />
            <div className='panel_wrapper'>
                <Nav
                    activeUser={activeUser}
                    setActiveuser={setActiveuser}
                />
                {activeUser &&
                    <>
                        <User />
                        <Logout setActiveuser={setActiveuser} />
                    </>}

            </div>

        </div>
    )
}

export default Header

