import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const ApplyJob = ({ job }) => {
    const { id, companyLogo, jobTitle, companyName, jobType, location, fullTimeOrPart, salary } = job;
    return (
        <div className='p-4 border-2 mx-12 mt-12 rounded-none flex flex-col lg:flex-row justify-between items-center'>
            <div className='flex flex-col lg:flex-row gap-4 items-center'>
                <img src={companyLogo} className='bg-gray-100 p-6 rounded w-80' alt="" />
                <div>
                    <h3 className='font-semibold'>{jobTitle}</h3>
                    <p>{companyName}</p>
                    <div className='flex gap-2 mt-2 mb-2'>
                        <h5 className='border border-violet-500 text-violet-500 p-1 rounded font-semibold'>{jobType}</h5>
                        <h5 className='border border-violet-500 text-violet-500 p-1 rounded font-semibold'>{fullTimeOrPart}</h5>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='flex items-center justify-center gap-2'>
                            <MapPinIcon className="h-4 w-4 text-gray-500" />
                            <p>{location}</p>
                        </div>
                        <div className='flex items-center justify-center gap-2'>
                            <CurrencyDollarIcon className="h-4 w-4 text-gray-500" />
                            <p>Salary: {salary}</p>
                        </div>

                    </div>
                </div>
            </div>


            <div>
                <button className='bg-violet-500 text-white font-semibold rounded px-5 py-2 mt-3'>View Details</button>
            </div>
        </div>
    );
};

export default ApplyJob;