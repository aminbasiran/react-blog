import React from 'react'
import Header from "../header/Header"
import Navbar from "../navbar/Navbar"


const Layout = ({children}) => {
    return (
        <div className='w-full h-full '>
            <div className='max-w-[1000px] p-6 mx-auto my-0  '>
                {children}
                <div className=' font-semibold px-3 py-2 cursor-pointer hover:text-black text-xs text-zinc-400 transition-all duration-500 ease-in-out '>Report bug</div>
            </div>
        </div>
    )
}


Layout.Header = Header
Layout.Navbar = Navbar

export default Layout
