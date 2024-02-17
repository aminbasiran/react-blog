import React from 'react'
import Title from './Title'
import Description from './Description'
import Image from './Image'
import Views from './Views'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

const withNavigation = (WrappedComponent) => {
    return ({ to, ...props }) => {
        return <Link className='ml-auto' to={to}><WrappedComponent {...props} /></Link>;
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
