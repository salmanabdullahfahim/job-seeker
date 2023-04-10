import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='hero-section mt-12 flex items-center justify-around'>
                <div className='ms-12'>
                    <h1 className='text-6xl font-semibold'>One Step Closer To Your <span className='text-purple-500'>Dream Job</span></h1>
                    <p className='mt-2'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-purple-500 text-white font-semibold rounded px-5 py-2 mt-3'>Get Started</button>
                </div>
                <img className='w-5/12' src="https://i.ibb.co/7tN1mCk/P3-OLGJ1-copy-1.png" alt="" />
            </div>

            <div className="job-category">

            </div>

            <div className="featured-job">

            </div>
        </div>
    );
};

export default Home;