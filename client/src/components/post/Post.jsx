import React from 'react'
import CompoundArticle from './CompoundPost'
import { FaHeartPulse } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const Post = ({post}) => {
    return (
        <CompoundArticle key={post.id}>
                    <CompoundArticle.Title>{post.title}</CompoundArticle.Title>
                    <CompoundArticle.Image source={post.image}/>
                    <p className=' text-zinc-600 text-xs font-semibold text-left mb-2'>25th January 2023</p>
                    <CompoundArticle.Description isExpanded={false}>{post.description}</CompoundArticle.Description>
                    <CompoundArticle.Views>
                        <div  className='flex flex-row place-items-center gap-2'>
                            <FaHeartPulse/>
                            <p className='text-sm font-semibold'>18.2k likes</p>
                            
                        </div>
                        <div  className='flex flex-row place-items-center gap-2'>
                            <FaEye/>
                            <p className='text-sm font-semibold'>2.3k views</p>
                            
                        </div>
                        <CompoundArticle.Button>Read more</CompoundArticle.Button>
                    </CompoundArticle.Views>
                </CompoundArticle>
    )
}

export default Post
