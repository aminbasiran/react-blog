
import React, {useState,useEffect} from 'react'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <div className='animate-fade-right animate-once animate-duration-[800ms]'>
            <ul className='list-none flex flex-row gap-6 justify-left my-7'>
                <NavLink id='nav-item' to="/home" className={({ isActive  }) =>`text-sm font-bold  ${isActive ? "border-b-2 border-black text-black" : "text-zinc-400"}`}>Home</NavLink>
                <NavLink id='nav-item' to="/article" className={({ isActive }) =>`text-sm font-bold  ${isActive ? "border-b-2 border-black text-black" : "text-zinc-400"}`}>Article</NavLink>
            </ul>
        </div>
    )
}

export default Navbar
