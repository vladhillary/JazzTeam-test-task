import React from 'react'
import admin_ico from '../img/admin_ico.png'

function User() {

    const {login} = JSON.parse(window.localStorage.getItem('admin'))

    return (
        <div className='active_user'>
            <img src={admin_ico} alt="admin_ico" />
            <span>{login}</span>
        </div>
    )
}

export default User
