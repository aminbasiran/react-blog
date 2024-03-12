import React, {useState} from 'react'
import CompoundArticle from './CompoundPost'
import { FaEye } from "react-icons/fa"
import {saveToDatabase} from "../../utils.js"
import postObject from '../../resources.json';



const Post = ({post}) => {
    
    const [viewCounts, setViewCount] = useState(post.views);

    const handleView = (id) => {
        const result = postObject.find(item => item.id === id);

        if(result){
            result.views++
            saveToDatabase(postObject)
        }

        else{


        }
    }



    return (
        <CompoundArticle>
            <CompoundArticle.Title>{post.title}</CompoundArticle.Title>
            <CompoundArticle.Image source={post.image}/>
            {/* <p className=' text-zinc-600 text-xs font-semibold text-left mb-2 animate-fade-right animate-once animate-duration-[800ms] animate-delay-300' >25th January 2023</p> */}
            <CompoundArticle.Description isExpanded={false}>{post.description}</CompoundArticle.Description>
            <CompoundArticle.Views>
                <div  className=' cursor-pointer flex flex-row place-items-center gap-2'>
                    <FaEye/>
                    <p className='text-sm font-semibold'>{viewCounts} views</p>
                </div>
                <div onClick={()=>handleView(post.id)}>
                    <CompoundArticle.Button  to={`/post/${post.id}`}>Read more</CompoundArticle.Button>


                </div>
            </CompoundArticle.Views>
        </CompoundArticle>
    )
}

export default Post
