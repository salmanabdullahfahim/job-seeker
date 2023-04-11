import React from 'react';
import { getShoppingCart } from './utilities/fakedb';

const AppliedJob = () => {
    const appliedJob = getShoppingCart()
    console.log(appliedJob)
    return (
        <div>
            <h2 className='text-center mt-12 font-semibold text-2xl'>Applied Jobs</h2>

        </div>
    );
};

export default AppliedJob;