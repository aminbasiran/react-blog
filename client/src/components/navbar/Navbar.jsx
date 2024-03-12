
import React, {useState,useEffect} from 'react'
import { useNavigate, Link} from "react-router-dom";
import { IoBugSharp } from "react-icons/io5";

const Navbar = () => {

    const [active,setActive] = useState("home")

    const handleChangeActive = (value) => {
        if( value === active){
            return
        }

        setActive(value)
    }

    return (
        <div className=''>
            <ul className='list-none flex flex-row gap-2 justify-left my-5'>

                <li onClick={()=>handleChangeActive("home")} className={`${active==="home" ? "border-b-2 border-black" : ""} font-semibold px-3 py-2 cursor-pointer hover:bg-zinc-200 text-xs transition-all duration-500 ease-in-out`}>Home</li>
                <li onClick={()=>handleChangeActive("article")} className={`${active==="article" ? "border-b-2 border-black" : ""} font-semibold px-3 py-2 cursor-pointer hover:bg-zinc-200 text-xs transition-all duration-500 ease-in-out`}>Articles</li>

            </ul>
        </div>
    )
}

export default Navbar
