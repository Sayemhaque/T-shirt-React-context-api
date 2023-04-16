import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faTimes } from '@fortawesome/free-solid-svg-icons';
import ActiveLink from '../ActiveLink';
const Header = () => {
    const [showNav , setShowNav] = useState(false)
    const toggleNav = () => {
        setShowNav(!showNav)
    }
    return (
        <div >
            <nav className='bg-blue-300 static md:flex justify-between items-center px-12 py-5'>
            {/* Logo */}
          <div className='flex items-center justify-between'>
          <h1 className='text-4xl font-fold font-serif'>SHopIt</h1>
           <div onClick={toggleNav}>
              {/* Bar icon */}
              {showNav ?   <FontAwesomeIcon icon={faTimes} className='cursor-pointer text-xl' /> :<FontAwesomeIcon icon={faBars} className='md:hidden cursor-pointer' />}
           </div>
           
           
          </div>
            {/* nav links */}
            <ul className={`mt-8 ${showNav ? "" : "hidden" }   md:mt-0 lg:flex md:space-y-0 md:space-x-6  font-bold `}>
                <ActiveLink to={`/`}><li>Home</li> </ActiveLink>
           <ActiveLink to={`/review`}> <li><FontAwesomeIcon icon={faCartShopping}/></li></ActiveLink> 
           <ActiveLink to={`/about`}><li>About</li></ActiveLink> 
           <ActiveLink to={`/contact`}><li>Contact</li></ActiveLink>
           <ActiveLink to={`/login`}><li>Log In</li></ActiveLink>
           <ActiveLink to={`/register`}><li>Register</li></ActiveLink>
            </ul>
           

        </nav>
        </div>
    );
};

export default Header;