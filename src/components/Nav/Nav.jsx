import React from 'react'
import logo from './../assets/logo.png'
import './Nav.css'

function Nav() {
  return (
    <div className='nav-container'>
        <div className='nav-left'>
            <img className='flash-logo' src={logo} alt='flashLogo' />
            <p className="flash-logo-text">FlashType</p>
        </div>
        <div className="nav-right">
            <a 
                target='_blank'
                className='nav-link'
                href='https://www.google.com'
                rel='noreferrer'
            >
            GOOGLE
            </a>
        </div>
    </div>
  )
}

export default Nav