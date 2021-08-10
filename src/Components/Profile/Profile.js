import React from 'react'
import './profile.css'
import photo_admin from '../img/admin_img.png'
import UserInfo from './UserInfo'
import { NavLink } from "react-router-dom"


function Profile() {

    const userinfo = JSON.parse(window.localStorage.getItem('admin'))


    delete userinfo.auth
    delete userinfo.password

    const info = Object.entries(userinfo)

    return (
        <div className='profile_container'>
            <div className='profile_wrapper'>
                <div className='img_wrappr'>
                    <img src={photo_admin} alt='photo_user' />
                </div>
                <div className='info_user_wrapper' >
                    <ul className='info_user'>
                        {info.map((item, index) => {
                            return <UserInfo
                                key={item + index}
                                text={item[0] + ': '}
                                value={item[1]}
                            />
                        })}
                    </ul>
                </div>

            </div>
            <div className='user_btn_wrapper'>
                <NavLink exact to='/table'>
                    <button className='table_btn'>Go to Table of Employee</button>
                </NavLink>
                <button className='calendar_btn' disabled>Go to Calendar</button>
            </div>
            <div className='message_wrapper'>
                <h3>There is no data about future events in the calendar</h3>
            </div>
        </div>
    )
}

export default Profile
