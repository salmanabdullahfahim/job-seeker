import React, { useEffect, useState } from 'react';
import JobCategory from './JobCategory';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from './FeaturedJob';

const Home = () => {

    const [category, setCategory] = useState([]);
    const [showAll,setShowAll] = useState(false);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);

    // const job = useLoaderData();

    const [job, setJob] = useState([]);
    useEffect(()=>{
        fetch('job.json')
        .then(res => res.json())
        .then(data => setJob(data))
    },[])

    const handleSeeAllJobs = () => {
        
        setShowAll(true)
    };

    return (
        <div>
            <div className='hero-section mt-12 flex flex-col lg:flex-row items-center justify-around'>
                <div className='ms-12'>
                    <h1 className='text-6xl font-semibold'>One Step Closer To Your <span className='text-violet-600'>Dream Job</span></h1>
                    <p className='mt-2'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-violet-500 text-white font-semibold rounded px-5 py-2 mt-3'>Get Started</button>
                </div>
                <img className='w-5/12' src="https://i.ibb.co/7tN1mCk/P3-OLGJ1-copy-1.png" alt="" />
            </div>

            <div className="job-category mt-12">
                <h3 className='text-3xl font-semibold text-center'>Job Category List</h3>
                <p className='text-center mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid grid-cols lg:grid-cols-4 gap-4 mt-6 mx-12 mb-6'>
                    {
                        category.map(category => <JobCategory key={category.id} category={category}></JobCategory>)
                    }
                </div>

            </div>

            <div className="featured-job mt-12">
                <h3 className='text-3xl font-semibold text-center'>Featured Jobs</h3>
                <p className='text-center mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid grid-cols lg:grid-cols-2 gap-3 mt-8 mx-6'>

                    {
                        job.slice(0, showAll ? 6 : 4).map(singleJob => <FeaturedJob key={singleJob.id} singleJob={singleJob}></FeaturedJob>)
                    }
                </div>

                    <div className='text-center mt-8 mb-6'>
                        <button className='bg-violet-500 text-white font-semibold rounded px-5 py-2' onClick={handleSeeAllJobs}>See All Jobs</button>
                    </div>
               
            </div>
        </div>
    );
};

export default Home;