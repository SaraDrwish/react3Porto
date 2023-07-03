import React from 'react';
import "./navbar.css";
import Toggle from '../Toggle/Toggle';

import { Link } from 'react-scroll'

function Navbar() {
  return (
      <div className='n-porto' id='Navbar'>
          
          <div className='n-left'>
              <div className='n-logo'>Sara</div>
              {/* <span>tpggle</span> */}
              <Toggle/>
          </div>
          <div className='n-right'>
              <div className='n-list'>
                  <ul>
                      <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass" >
                          <li>Home</li>
                     </Link>
                      <Link spy={true} to="Portofolio" smooth={true}   >
                              <li>Portfolio</li>
                      </Link>
                      <Link spy={true} to="Serv" smooth={true}  >
                          <li>Services</li>
                      </Link>
                      <Link spy={true} to="works" smooth={true}  >
                          <li>Works</li>
                       </Link>
                      <Link spy={true} to="Testimon" smooth={true} >
                          <li>Testimonials</li>
                       </Link>
                  </ul>
              </div>
              <button className='n-button'> Contact Me </button>
          </div>

    </div>
  )
}

export default Navbar