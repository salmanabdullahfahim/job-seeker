import React from 'react';

const blog = () => {
    return (
        <div className='mt-12 bg-purple-600 m-6 rounded p-4'>
             <div>
                <h3 className='text-3xl font-semibold p-3 text-white'>Q: When should you use context API?</h3>
                <p className='text-xl ms-4 text-white'>Ans: Context API can be useful when you have data that needs to be accessed by multiple components at different levels of the component tree, and passing it down through props becomes cumbersome. Context API provides a way to share data between components without having to pass it explicitly, making your code cleaner and more efficient.</p>
            </div>
            <div>
                <h3 className='text-3xl font-semibold p-3 text-white'>Q: What is a custom hook?</h3>
                <p className='text-xl ms-4 text-white'>Ans: A Custom Hook is a function in React that allows you to reuse stateful logic across different components. Custom Hooks are a way to extract common logic and make it reusable across multiple components, making your code more modular and easier to maintain.</p>
            </div>
            <div>
                <h3 className='text-3xl font-semibold p-3 text-white'>Q: What is useRef?</h3>
                <p className='text-xl ms-4 text-white'>Ans: useRef is a React hook that returns a mutable ref object, which can be used to store a value that persists between renders. useRef is commonly used to access DOM elements and maintain focus on an input, but it can also be used to store previous values or other mutable data that needs to persist across renders.</p>
            </div>
            <div>
                <h3 className='text-3xl font-semibold p-3 text-white'>Q: What is useMemo?</h3>
                <p className='text-xl ms-4 text-white'>Ans: useMemo is a hook in React that allows you to memoize the result of a function. Memoizing a value means that the function is only recomputed if one of its dependencies has changed, which can be useful for optimizing performance and avoiding unnecessary re-renders. useMemo is often used for expensive calculations or when you need to avoid re-computing the same value multiple times.</p>
            </div>
        </div>
    );
};

export default blog;