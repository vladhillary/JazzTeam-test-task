import React from 'react'
import Nav from '../Nav/Nav.js'
import './header.css'
import Logo from './Logo'

function Header() {


    return (
        <div className='container'>
            <Logo />
            <Nav />
        </div>
    )
}

export default Header

