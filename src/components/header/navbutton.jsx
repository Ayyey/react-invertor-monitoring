import React from 'react'
import './navbutton.css'
export default function NavButton({ name, callback }) {
    return (
        <div className='nav-button d-flex flex-row'>
            <div className='navbutton'>{name}</div>
            <div className="button-divider"></div>
        </div>
    )
}
