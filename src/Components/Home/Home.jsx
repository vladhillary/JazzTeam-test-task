import React from 'react'
import Slider from './Slider'
import './home.css'
import AboutUs from './AboutUs'

function Home() {
    return (
        <div className='home_wrapper'>
            <Slider />
            <AboutUs />
        </div>
    )
}

export default Home
