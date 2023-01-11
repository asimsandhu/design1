import React,{useState} from 'react';
import {Link, link} from 'react-router-dom';

import './navbar.css' 



function Navbar() {
  const [click,setclick]=useState(false);

  const closeNavbar=()=>setclick(!click)
  return (
      <>

    <nav className="navbar">

            <div  className="navbar-container">
            <Link to='/'  className="navbar-logo">
            QR <i className='fab fa-typo3'/>
            </Link>
            <div className='menu-icon' onClick={closeNavbar}>
            
           
            <i className={click ? 'fas fa-times ' : 'fas fa-bars '} />
            </div>
            <ul className={click ? 'nav-menu active':'nav-menu'}>
              
               <li className='nav-item'>
                <Link to='/qw' className='nav-links' onClick={closeNavbar}>
                  story
                </Link>

              </li> 
               <li className='nav-item'>
                <Link to='/a' className='nav-links' onClick={closeNavbar}>
                  about us
                </Link>

              </li>
              <li className='nav-item'>
                <Link to='/s' className='nav-links' onClick={closeNavbar}>
                  contact
                </Link>

              </li>
              <li className='nav-item'>

                <Link to='/d' className='nav-links' onClick={closeNavbar}>
                  memorial
                </Link>

              </li>
              <li className='nav-item'>
                
                <Link to='/q' className='nav-links' onClick={closeNavbar}>
                  future words
                </Link>

              </li>
              <li className='nav-item'>
                
                <Link to='/w' className='nav-links' onClick={closeNavbar}>
                  story
                </Link>

              </li>
            </ul>
            </div>

        </nav>

    </>
  )
}

export default Navbar