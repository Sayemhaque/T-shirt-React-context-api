import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-blue-300 flex justify-between items-center px-12 py-5'>
            {/* Logo */}
            <h1 className='text-4xl font-fold font-serif'>Logo</h1>
            {/* nav links */}
            <ul className='space-x-6 fo font-bold'>
                <Link to="/">Home</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    );
};

export default Header;