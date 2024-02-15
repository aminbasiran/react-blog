import React from 'react'

const Button = ({children}) => {
    return (
        <button className='p-2 bg-black text-white text-xs ml-auto rounded-md'>{children}</button>
    )
}

export default Button
