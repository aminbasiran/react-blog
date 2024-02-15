import React from 'react'
import Title from './Title'
import Description from './Description'
import Image from './Image'
import Views from './Views'
import Button from '../button/Button'

const CompoundPost = ({children}) => {
    
    return (
        <div className='cursor-pointer mb-9 '>
            {children}
        </div>
    )
}

CompoundPost.Title = Title
CompoundPost.Image = Image
CompoundPost.Description = Description
CompoundPost.Views = Views
CompoundPost.Button = Button

export default CompoundPost
