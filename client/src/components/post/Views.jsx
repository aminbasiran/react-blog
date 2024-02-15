import React from 'react'

const Views = ({children}) => {
    return (
        <div className='flex flex-row justify-start gap-3'>
            {children}
        </div>
    )
}

export default Views
