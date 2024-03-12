import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="mb-10 animate-fade-right animate-once animate-duration-[800ms]">
            <Link to={"/"}>
                <h1 className='cursor-pointer text-5xl font-bold text-[#3A71CA] '>amnbsrn<span className='text-black '>/dev.<span className=''>blog</span></span></h1>
            </Link>
        </div>
    )
}

export default Header
