import React from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import admin from '../../redux/actions/admin.js'

function Logout() {

    const history = useHistory()

    const dispatch = useDispatch()

    const logoutHandler = () => {

        history.push('/')
        dispatch(admin(false))
    }

    return (
        <button onClick={logoutHandler} className='logout_btn'>Logout</button>
    )
}

export default Logout
