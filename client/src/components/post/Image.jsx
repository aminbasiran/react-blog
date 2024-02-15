import React from 'react'

const Image = ({source}) => {
    return (
        <div className='mt-3 mb-1'>
            <img src={source} alt="" />
        </div>
    )
}

export default Image
