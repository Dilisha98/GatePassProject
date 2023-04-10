import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav'

function Header() {
  return (
    <div className='header'>
            <div className='MainHeading'>
                <h2>SLT GATE PASS</h2>
            </div>
        <Nav />
    </div>
  )
}

export default Header