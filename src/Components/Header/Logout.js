import React from 'react'
import { useHistory } from "react-router-dom";

function Logout({setActiveuser}) {

    const history = useHistory();   

    const logoutHandler = () => {

        let activeUser = {
            login: 'Admin',
            password: '12345678',
            auth: false
        }
        window.localStorage.setItem('admin', JSON.stringify(activeUser))
        
        history.push('/')
        setActiveuser(false)
    }

    return (
        <button onClick={logoutHandler} className='logout_btn'>Logout</button>
    )
}

export default Logout
