import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="mb-10">
            <Link to={"/"}>
                <h1 className='cursor-pointer text-4xl font-bold text-[#3A71CA]'>amnbsrn<span className='text-black'>/dev.<span className='text-4xl'>blog</span></span></h1>
            </Link>
        </div>
    )
}

export default Header
