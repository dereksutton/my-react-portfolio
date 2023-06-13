import React from 'react';

function Navigation() {
    return (
        <nav className='p-5 bg-blue-300'>
            <ul className='flex justify-around'>
                <li><a href='#' className='text-blue-900 hover:text-blue-600'>About</a></li>
                <li><a href='#' className='text-blue-900 hover:text-blue-600'>Portfolio</a></li>
                <li><a href='#' className='text-blue-900 hover:text-blue-600'>Contact</a></li>
                <li><a href='#' className='text-blue-900 hover:text-blue-600'>Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;