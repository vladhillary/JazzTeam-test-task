import React from 'react'

function List({ h4Text, services, nameClass }) {
    return (
        <>
            <h4>{h4Text}</h4>
            <ul className={nameClass}>
                {services.map((item, index) => {
                   return <li key={item + index}>{item}</li>
                })}
            </ul>
        </>
    )
}

export default List
