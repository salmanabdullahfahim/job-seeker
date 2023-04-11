import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-evenly items-center mt-6'>
            <h2 className='text-3xl font-semibold'>JOB<span className='text-violet-600'>Seeker</span></h2>
            <div className='flex gap-5 font-semibold items-center'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/appliedjob'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <button className='bg-violet-500 text-white font-semibold rounded px-5 py-2'>Start Applying</button>
        </div>
    );
};

export default Header;