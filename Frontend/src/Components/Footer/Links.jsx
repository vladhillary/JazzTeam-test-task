import React from 'react'

function Links({src, href}) {
    return (
        <a href={href} target="_blank" rel="noreferrer noopener">
            <img src={src} alt="social link" />
        </a>
    )
}

export default Links
