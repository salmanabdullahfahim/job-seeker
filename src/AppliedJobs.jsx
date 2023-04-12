import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ApplyJob from './ApplyJob';



const AppliedJobs = () => {
    const jobs = useLoaderData();
    
    const savedJob = JSON.parse(localStorage.getItem('job-id'));

    let jobCart = [];
    for(const id of savedJob){
        const appliedJob = jobs.find(job => job.id == id);
        jobCart.push(appliedJob);
    }
    
    return (
        <div>
            <h2 className='text-center mt-12 font-semibold text-2xl'>Applied Jobs</h2>

            {
                jobCart.map(job => <ApplyJob key={job.id} job ={job}></ApplyJob>)
            }

        </div>
    );
};

export default AppliedJobs;