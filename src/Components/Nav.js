import React from 'react'
import Logoslt from './Images/SLT.png'
import './nav.css'

function Nav() {
  return (
    <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-light'>
            <div className='container-fluid'>
                <button className='navbar-toggler' data-bs-toggle="collapse"
                    data-bs-target="#navbarm" aria-controls='navbarm' aria-expanded="false"
                        aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                </button>     
                <div className="collapse navbar-collapse justify-content-md-center" id='navbarm'>
                        
                    <ul className='navbar-nav'>
                    <div className='logo' >
                            <img src={Logoslt} alt="" />
                        </div>
                        <li className='nav-item mx-4'> 
                            <a className="nav-link text-black text-style-bold" href='#'><strong>New Request</strong></a>
                        </li>
                        <li className='nav-item mx-4'> 
                            <a className="nav-link text-black" href='#'><strong>My Request</strong></a>
                        </li>
                        <li className='nav-item mx-4'> 
                            <a className="nav-link text-black" href='#'><strong>My Approval</strong></a>
                        </li>
                        <li className='nav-item mx-4'> 
                            <a className="nav-link text-black" href='#'><strong>My Receipt</strong></a>
                        </li>
                        <li className='nav-item mx-4'> 
                            <a className="nav-link text-black" href='#'><strong>Dispatch</strong></a>
                        </li>
                        <li className='nav-item mx-4'> 
                            <a className="nav-link text-black" href='#'><strong>Item Tracker</strong></a>
                        </li>
                        <li className='nav-item mx-4'> 
                            <a className="nav-link text-black" href='#'><strong>Admin</strong></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav