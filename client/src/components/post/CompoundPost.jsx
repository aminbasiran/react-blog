import React from 'react'
import Title from './Title'
import Description from './Description'
import Image from './Image'
import Views from './Views'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const withNavigation = (WrappedComponent) => {
    return ({ to,handleViewPost, ...props }) => {
        return <div onClick={handleViewPost} className='ml-auto'><Link   to={to}><WrappedComponent {...props} /></Link></div>
            
    };
};

const CompoundPost = ({children}) => {
    
    return (
        <div>
            {children}
        </div>
    )
}

CompoundPost.Title = Title
CompoundPost.Image = Image
CompoundPost.Description = Description
CompoundPost.Views = Views
CompoundPost.Button = withNavigation(Button)

export default CompoundPost
