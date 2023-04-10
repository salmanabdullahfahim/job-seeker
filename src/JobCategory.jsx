import React from 'react';

const JobCategory = ({ category }) => {

    const { categoryName, availableJob, logo } = category;

    return (
    
            <div className='bg-violet-50 py-8 rounded text-center'>
                <img className='mx-auto' src={logo} alt="" />
                <h6 className='font-medium'>{categoryName}</h6>
                <p>{availableJob} jobs available</p>
            </div>
        
    );
};

export default JobCategory;