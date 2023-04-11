import React from 'react';

const FeaturedJob = ({ singleJob }) => {

    const { id, companyLogo, jobTitle, companyName, jobType, location, fullTimeOrPart, salary } = singleJob;
    return (
        <div className='border rounded p-6 flex flex-col'>
            <img className='w-1/2' src={companyLogo} alt="" />
            <h3 className='font-medium'>{jobTitle}</h3>
            <p>{companyName}</p>

            <div className='flex gap-2 mt-2 mb-2'>
                <h5 className='border border-violet-500 text-violet-500 p-1 rounded'>{jobType}</h5>
                <h5 className='border border-violet-500 text-violet-500 p-1 rounded'>{fullTimeOrPart}</h5>
            </div>

            <div className='flex gap-2'>
                <p>{location}</p>
                <p>Salary: {salary}</p>
            </div>
            <div className='mt-auto'>
                <button className='bg-violet-500 text-white font-semibold rounded px-5 py-2 mt-3'>View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJob;