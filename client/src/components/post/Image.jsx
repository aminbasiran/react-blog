import React from 'react'

const Image = ({source}) => {
    return (
        <div className='mt-3 mb-1 animate-fade-right animate-once animate-duration-[800ms] animate-delay-200'>
            <img src={source} alt="" />
        </div>
    )
}

export default Image
