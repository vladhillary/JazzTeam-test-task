import React, { useState, useEffect } from 'react'
import './signin.css'
import unlock_ico from '../img/unlock_ico.png'
import Warning from './Warning'

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import admin from '../../redux/actions/admin.js'

function SignIn() {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginDirty, setLoginDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [loginError, setLoginError] = useState("login can't be empty")
    const [passwordError, setPasswordError] = useState("password can't be empty")
    const [checkUserData, setCheckUserData] = useState(false)
    const [invalidValue, setInvalidValue] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector(state => state.admin)

    const checkUser = () => {

        if (login !== state.login) {
            setCheckUserData(false)
            setLogin('')
            setPassword('')
            setInvalidValue(true)
            return
        }
        
        if (password !== state.password) {
            setCheckUserData(false)
            setInvalidValue(true)
            setLogin('')
            setPassword('')
            return
        }

        dispatch(admin(true))
        history.push('/profile')
    }

    useEffect(() => {

        if (loginError || passwordError) {
            setCheckUserData(false)
        } else {
            setCheckUserData(true)
        }

    }, [passwordError, loginError])

    const inputsChange = (e) => {

        switch (e.target.name) {

            case 'login':

                setLogin(e.target.value)

                if (e.target.value.length <= 2) {

                    setLoginError("the login can't be short")

                    if (!e.target.value) {
                        setLoginError("login can't be empty")
                    }

                } else {
                    setLoginError('')
                }
                break

            case 'password':

                setPassword(e.target.value)

                if (e.target.value.length <= 4) {

                    setPasswordError("the password can't be short")

                    if (!e.target.value) {

                        setPasswordError("password can't be empty")

                    }
                } else {

                    setPasswordError('')
                }
                break
                
            default: return
        }

        setInvalidValue(false)
    }

    const blurHandler = (e) => {

        switch (e.target.name) {
            case 'login':
                setLoginDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            default: return
        }
    }

    const pressEnterToSingIn = (e) => {

        if (e.keyCode === 13) checkUser()
    }

    return (
        <div className='container auth'>

            <div className='signin_wrapper'>

                <h2 className='greeating'>Welcome</h2>

                {invalidValue ? <Warning warning="the login or password is incorrect" /> : null}

                {(passwordDirty && passwordError) && <Warning warning={passwordError} />}

                {(loginDirty && loginError) && <Warning warning={loginError} />}

                <form className='input_wrapper'>

                    <input
                        onBlur={blurHandler}
                        value={login}
                        onChange={inputsChange}
                        type='text'
                        placeholder='type your login'
                        name='login'
                        autoComplete='user-name'
                        onKeyDown={pressEnterToSingIn} />

                    <input
                        onBlur={blurHandler}
                        value={password}
                        onChange={inputsChange}
                        type='password'
                        placeholder='type your password'
                        name='password'
                        autoComplete='current-password'
                        onKeyDown={pressEnterToSingIn} />

                </form>

                <button onClick={checkUser} className={!checkUserData ? 'signin_btn disabled' : 'signin_btn'}>
                    <img src={unlock_ico} alt="unlock_ico" />
                    Sign In
                </button>

            </div>
        </div>
    )
}

export default SignIn
