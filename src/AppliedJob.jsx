import React, { useState } from 'react';
import { getShoppingCart } from './utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const AppliedJob = () => {
    const appliedJob = getShoppingCart();
    const savedCart = useLoaderData();
    console.log(savedCart)

    const [cart,setCart] = useState(savedCart);
    // console.log(cart)
    // console.log(appliedJob)
    return (
        <div>
            <h2 className='text-center mt-12 font-semibold text-2xl'>Applied Jobs</h2>

        </div>
    );
};

export default AppliedJob;