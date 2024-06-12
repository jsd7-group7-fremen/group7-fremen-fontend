import React from 'react'
import { Link } from 'react-router-dom'

const MocNav = () => {
  return (
    <div className='fixed bottom-2 right-2 w-1/2 bg-slate-300 flex justify-around rounded-md z-10'>
        <Link className='hover:bg-slate-200 p-2 w-full text-center transition-all duration-200' to="/">Home</Link>
        <Link className='hover:bg-slate-200 p-2 w-full text-center transition-all duration-200' to="/Filter">Filter</Link>
        <Link className='hover:bg-slate-200 p-2 w-full text-center transition-all duration-200' to="/Cart">Cart</Link>
        <Link className='hover:bg-slate-200 p-2 w-full text-center transition-all duration-200' to="/Admin">Admin</Link>
        <Link className='hover:bg-slate-200 p-2 w-full text-center transition-all duration-200' to="/Login">Login</Link>
        <Link className='hover:bg-slate-200 p-2 w-full text-center transition-all duration-200' to="/Payment">Payment</Link>
        <Link className='hover:bg-slate-200 p-2 w-full text-center transition-all duration-200' to="/ProductInfo">ProductInfo</Link>
        <Link className='hover:bg-slate-200 p-2 w-full text-center transition-all duration-200' to="/Register">Register</Link>
    </div>
  )
}

export default MocNav