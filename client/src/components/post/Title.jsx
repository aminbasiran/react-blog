import React from 'react'

const Title = ({children}) => {
    return (
            <h1 className='text-xl text-left font-bold animate-fade-right animate-once animate-duration-[800ms] ' >{children}</h1>
    )
}

export default Title
