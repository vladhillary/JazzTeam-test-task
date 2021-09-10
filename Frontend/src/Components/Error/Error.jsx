import React from 'react'
import { NavLink } from "react-router-dom"
import './error.css'

function Error() {
    return (
        <div className='container auth error_wrapper'>
            <h2 className='error_title'>Error 404</h2>
            <p className='error_text'>Something seems to have gone wrong! <br /> The page you are requesting does not exist. It is possible that it is outdated, has been deleted, or an incorrect address was entered in the address bar...</p>
            <NavLink to='/'>
                <button className='error_btn'>Go to Home page</button>
            </NavLink>
        </div>
    )
}

export default Error
