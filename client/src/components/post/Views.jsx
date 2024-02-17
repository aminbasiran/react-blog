import React from 'react'

const Views = ({children}) => {
    return (
        <div className='flex flex-row justify-start gap-3 mb-8 animate-fade-right animate-once animate-duration-[800ms] animate-delay-500'>
            {children}
        </div>
    )
}

export default Views
