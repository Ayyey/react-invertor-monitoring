import React from 'react'
import NavButton from './navbutton'

import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import './header.css'
export default function Header() {
    return (
        <header className='header d-flex flex-row  p-3 mb-1 border-bottom'>
            <div className='container px-auto'>
                <ul className='nav d-flex align-items-center mb-2 mb-lg-0 text-dark'>
                    <li className='me-2'>
                        <div className='sei-logo-container'>
                            <img src={logo} />
                        </div>
                    </li>
                    <li>
                        <Link to='/' className='navbar-link'>
                            <NavButton name={"О проекте"}></NavButton>
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard' className='navbar-link'>
                            <NavButton name={"Показатели"}></NavButton>
                        </Link></li>
                    <li>
                        <Link to='/import' className='navbar-link'>
                            <NavButton name={"Импорт/Экспорт"}></NavButton>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
