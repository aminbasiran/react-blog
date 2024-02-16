import React from 'react'

const Button = ({children}) => {
    return (
        <button className='p-2 text-white text-xs bg-black rounded-md'>{children}</button>
    )
}

export default Button
