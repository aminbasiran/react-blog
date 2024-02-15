import React from 'react'
import Header from "../header/Header"
import Navbar from "../navbar/Navbar"


const Layout = ({children}) => {
    return (
        <div className='w-full h-full '>
            <div className='max-w-[1000px] p-6 mx-auto my-0  '>
                {children}
            </div>
        </div>
    )
}


Layout.Header = Header
Layout.Navbar = Navbar

export default Layout
