import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Blog from './Blog'
import Statistics from './Statistics';
import JobDetails from './JobDetails';
import AppliedJob from './AppliedJob';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/job.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch('/job.json')
      },
      {
        path: '/appliedjob',
        element: <AppliedJob></AppliedJob>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
