import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='flex lg:flex-row justify-between lg:justify-around lg:items-center px-4 md:px-6 py-4 bg-white'>
            <Link to='/'>
                <h2 className='text-2xl md:text-3xl font-semibold'>
                    JOB<span className='text-violet-600'>Seeker</span>
                </h2>
            </Link>
            <div className='flex flex-col md:flex-row md:items-center'>
                <button
                    className='md:hidden focus:outline-none'
                    onClick={toggleMenu}
                >
                    {menuOpen ? (
                        <XMarkIcon className='w-6 h-6 text-gray-800' />
                    ) : (
                        <Bars3Icon className='w-6 h-6 text-gray-800' />
                    )}
                </button>
                <div
                    className={`${menuOpen ? 'flex flex-col lg:flex-row' : 'hidden'
                        } md:flex md:items-center md:ml-4`}
                >
                    <Link
                        className='block md:inline-block mt-3 md:mt-0 md:ml-6 text-gray-800 font-semibold hover:text-violet-600 transition-colors duration-300'
                        to='/'
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        className='block md:inline-block mt-3 md:mt-0 md:ml-6 text-gray-800 font-semibold hover:text-violet-600 transition-colors duration-300'
                        to='/statistics'
                        onClick={toggleMenu}
                    >
                        Statistics
                    </Link>
                    <Link
                        className='block md:inline-block mt-3 md:mt-0 md:ml-6 text-gray-800 font-semibold hover:text-violet-600 transition-colors duration-300'
                        to='/appliedjob'
                        onClick={toggleMenu}
                    >
                        Applied Jobs
                    </Link>
                    <Link
                        className='block md:inline-block mt-3 md:mt-0 md:ml-6 text-gray-800 font-semibold hover:text-violet-600 transition-colors duration-300'
                        to='/blog'
                        onClick={toggleMenu}
                    >
                        Blog
                    </Link>
                    <button className='block md:inline-block md:ml-6 mt-4 md:mt-0 text-white font-semibold rounded px-4 py-2 bg-violet-500 hover:bg-violet-600 transition-colors duration-300'>
                        Start Applying
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
