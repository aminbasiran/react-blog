
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()

    
    const [active,setActive] = useState("home")

    const handleChangeActive = (value) => {
        if( value === active){
            return
        }
        setActive(value)
        navigate("/post/article")
    }

    return (
        <div className=''>
            <ul className='list-none flex flex-row gap-2 justify-left my-5'>
                    <li onClick={()=>handleChangeActive("home")} className={`${active==="home" ? "border-b-2 border-black" : ""} font-semibold px-3 py-2 cursor-pointer hover:bg-zinc-200 text-xs transition-all duration-500 ease-in-out`}>Home</li>
                    <li onClick={()=>handleChangeActive("article")} className={`${active==="article" ? "border-b-2 border-black" : ""} font-semibold px-3 py-2 cursor-pointer hover:bg-zinc-200 text-xs transition-all duration-500 ease-in-out`}>Articles</li>
                    <li className='ml-auto font-semibold px-3 py-2 cursor-pointer hover:text-black text-xs text-zinc-400 transition-all duration-500 ease-in-out '>+ Create post</li>
                
                
            </ul>
        </div>
    )
}

export default Navbar
