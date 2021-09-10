import React from 'react'

function ContactWay({ text, img, recipient, href }) {
    return (
        <>
            <li>
                <div className='img_wrapper'>
                    <img src={img} alt={text} />
                </div>
                <div className='contact_wrapper'>
                    <span>{text}</span> &#160;
                    <a href={href} target="_blank" rel="noreferrer noopener">{recipient}</a>
                </div>
            </li>
        </>
    )
}

export default ContactWay
