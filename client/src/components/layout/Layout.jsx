import React from 'react'


const Layout = ({children,padding}) => {
    return (
        <div className={`${padding} `} >
                {children}
        </div>
    )
}

export default Layout
