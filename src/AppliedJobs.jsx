import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ApplyJob from './ApplyJob';

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const savedJob = JSON.parse(localStorage.getItem('job-id'));

    const [filter, setFilter] = useState(null);

    const jobCart = savedJob ? savedJob.map((id) => jobs.find((job) => job.id === id)) : [];

    const filteredJobs = filter ? jobCart.filter((job) => job.jobType === filter) : jobCart;

    return (
        <div>
            <div className="bg-gradient-to-r from-indigo-400 via-purple-600 to-purple-400 py-3 rounded">
                <h2 className="text-center mt-12 font-semibold text-4xl pb-12 text-white">Applied Jobs</h2>
            </div>

            <div className="flex justify-end space-x-4 mt-4 mr-12">
                <button
                    className={`px-4 py-2 rounded-md border border-purple-500 ${filter === 'Remote' ? 'bg-violet-500 text-white' : 'bg-white text-violet-500'
                        }`}
                    onClick={() => setFilter('Remote')}
                >
                    Remote
                </button>
                <button
                    className={`px-4 py-2 rounded-md border border-purple-500 ${filter === 'Onsite' ? 'bg-violet-500 text-white' : 'bg-white text-violet-500'
                        }`}
                    onClick={() => setFilter('Onsite')}
                >
                    Onsite
                </button>
            </div>

            {filteredJobs.map((job) => (
                <ApplyJob key={job.id} job={job} />
            ))}
        </div>
    );
};

export default AppliedJobs;
