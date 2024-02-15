import React from 'react'
import clsx from 'clsx';

const Description = ({children,isExpanded}) => {

    const expandPost = clsx('text-left text-zinc-600 text-sm font-semibold mb-5', {
        '': isExpanded,
        'h-[7.80rem] overflow-hidden':!isExpanded
    });
    
    return (
        <div className={expandPost}>
            {children}
        </div>
    )
}

export default Description
