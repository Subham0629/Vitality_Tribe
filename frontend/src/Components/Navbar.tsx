import React from 'react'
import {Link, useNavigate} from "react-router-dom"

export default function Navbar() {
  const navigate=useNavigate()
  return (
    <div className='bg-[#4f46e5] text-white font-extrabold w-[100%] fixed top-0 p-4 z-10'>
    <div className='flex justify-between w-[95%] py-2 m-auto   items-center'>
      <div className='flex'>
       <Link to={"/"}><p className=' text-[larger]'>VITALITY TRIBE</p></Link> 
      </div>
      <div className='flex justify-between gap-10 text-[smaller]'>
        {/* <Link to={"/workout"}><p>WORKOUT</p></Link> */}
        <Link to={"/guides"}><p>GUIDES</p></Link>
        <Link to={"/blogs"}><p>BLOGS</p></Link>
        <Link to={"/dashboard"}><p>DASHBOARD</p></Link>
        <Link to={"/register"}><p>REGISTER</p></Link>
        <Link to={"/login"}><p>LOGIN</p></Link>
      </div>
    </div>
    </div>
  )
}


