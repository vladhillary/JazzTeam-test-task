import React, { useEffect, useState } from 'react'
import slider_1 from '../img/silicon_valley.jpg'
import slider_2 from '../img/silicon_valley_2.jpg'
import slider_3 from '../img/silicon_valley_3.jpg'


const images = [
    <img key={slider_1} src={slider_1} alt='slider_photo' />,
    <img key={slider_2} src={slider_2} alt='slider_photo' />,
    <img key={slider_3} src={slider_3} alt='slider_photo' />
]


function Slider() {

    const [activeIndex, setActiveIndex] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => current === images.length - 1 ? 0 : current + 1)
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    const prevImageIndex = activeIndex ? activeIndex - 1 : images.length - 1
    const nextImageIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    return (
        <div className='slider'>

            <div className='slider_image slider_image_prev'
                key={prevImageIndex}>

                {images[prevImageIndex]}
            </div>
            <div className='slider_image'
                key={activeIndex}>
                {images[activeIndex]}

            </div>
            <div className='slider_image slider_image_next'
                key={nextImageIndex}>
                {images[nextImageIndex]}

            </div>
        </div>
    )
}

export default Slider
