import React from 'react'

function Warning({warning}) {
    return (
        <div className='auth_error'>
            {warning}
        </div>
    )
}

export default Warning
