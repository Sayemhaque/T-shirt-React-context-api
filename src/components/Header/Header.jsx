import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-red-200 flex justify-between px-12 py-5'>
            {/* Logo */}
            <h1>Logo</h1>
            {/* nav links */}
            <ul className='space-x-6'>
                <Link to="/">Home</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    );
};

export default Header;