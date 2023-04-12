import React, { useEffect, useState } from 'react';
import { json, useLoaderData, useParams } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, CurrencyDollarIcon, EnvelopeIcon, BriefcaseIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const JobDetails = () => {

    const [details, setDetails] = useState();


    const dynamic = useParams();

    const data = useLoaderData();

    useEffect(() => {
        if (data.length > 0) {
            const findJob = data.find(job => job.id == dynamic.id);
            setDetails(findJob);
        }
    }, [data, dynamic.id])

    const addToLocalStorage = (id) => {
        const previousAppliedJobs = JSON.parse(localStorage.getItem('job-id'));
        if (previousAppliedJobs) {
            if (previousAppliedJobs.includes(id)) {
                toast.error('Already applied!');
            }
            else {
                localStorage.setItem('job-id', JSON.stringify([...previousAppliedJobs, id]));
            }
        }
        else{
            localStorage.setItem('job-id', JSON.stringify([id]));
        }
      
    }




    return (
        <div>
            <h2 className='text-center mt-12 font-semibold text-3xl'>Job Details</h2>

            <div className='flex flex-col lg:flex-row  mt-6 gap-6 mx-12'>
                <div className=''>
                    <h2><span className='font-semibold'>Job Description: </span>{details?.description}</h2>
                    <h2 className='mt-2'><span className='font-semibold'>Job Responsibility: </span>{details?.responsibility}</h2>
                    <h2 className='mt-2'><span className='font-semibold'>Educational Requirement: </span></h2>
                    <p className='mt-2'>{details?.educationalRequirements}</p>
                    <h2 className='mt-2'><span className='font-semibold'>Experience: </span></h2>
                    <p className='mt-2'>{details?.experiences}</p>
                </div>


                <div>
                    <div className='p-4 bg-violet-100 shadow-xl rounded-md h-80 w-80'>
                        <h2 className='font-semibold text-xl divide-y mb-2'>Job Details</h2>
                        <hr/>

                        <div className='mt-2 flex items-center gap-2'>
                            <CurrencyDollarIcon className='w-4 h-4 text-violet-500'></CurrencyDollarIcon>
                            <h4>Salary: {details?.salary}</h4>
                        </div>

                        <div className='mt-2 flex items-center gap-2'>
                            <BriefcaseIcon className='w-4 h-4 text-violet-500'></BriefcaseIcon>
                            <h4>Job Title: {details?.jobTitle}</h4>
                        </div>

                        <h2 className='font-semibold text-xl mt-2 mb-2'>Contact Information</h2>
                        <hr />

                        <div className='mt-2 flex items-center gap-2'>
                            <PhoneIcon className='w-4 h-4 text-violet-500'></PhoneIcon>
                            <h4 >Phone: {details?.phone}</h4>
                        </div>

                        <div className='mt-2 flex items-center gap-2'>
                            <EnvelopeIcon className='w-4 h-4 text-violet-500'></EnvelopeIcon>
                            <h4>Email: {details?.email}</h4>
                        </div>

                        <div className='mt-2 flex items-center gap-2'>
                            <MapPinIcon className='w-4 h-4 text-violet-500'></MapPinIcon>
                            <h4>Address: {details?.location}</h4>
                        </div>

                    </div>
                    <div className="text-center mt-6">
                        <button className='bg-violet-500 text-white font-semibold rounded px-8 py-2 w-full' onClick={() => addToLocalStorage(details.id)}>Apply Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;