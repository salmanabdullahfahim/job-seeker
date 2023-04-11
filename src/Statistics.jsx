import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const marksArray = [
        {
            name: 'Assignment-1',
            marks: 57
        },
        {
            name: 'Assignment-2',
            marks: 60
        },
        {
            name: 'Assignment-3',
            marks: 59
        },
        {
            name: 'Assignment-4',
            marks: 60
        },
        {
            name: 'Assignment-5',
            marks: 60
        },
        {
            name: 'Assignment-6',
            marks: 60
        },
        {
            name: 'Assignment-7',
            marks: 60
        },
        {
            name: 'Assignment-8',
            marks: 60
        }
    ]
    return (
        <div className='mt-12'>
            <h3 className='text-center mb-6  text-3xl font-semibold '>Assignment Marks in PieChart</h3>
            
                <PieChart className='mx-auto' width={400} height={400} isAnimationActive={true}>
                    <Pie
                        dataKey="marks"
                        isAnimationActive={false}
                        data={marksArray}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
        
        </div>
    );
};

export default Statistics;