import { useState } from 'react'
import './App.css'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <div className="App">
        <Header></Header>
        <Outlet></Outlet>
        <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
