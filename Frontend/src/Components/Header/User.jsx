import React from 'react'
import admin_ico from '../img/admin_ico.png'
import { useSelector } from 'react-redux'

function User() {

    const state = useSelector(state => state.admin)

    return (
        <div className='active_user'>
            <img src={admin_ico} alt="admin_ico" />
            <span>{state.login}</span>
        </div>
    )
}

export default User
