import React, {useEffect,useState} from 'react'
import Layout from '../components/layout.jsx/Layout'
import CompoundArticle from '../components/post/CompoundPost'
import { FaHeartPulse } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { postObject } from '../resources';

const Viewpost = () => {

    const {postID} = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        const filteredArray = postObject.filter(obj => obj.id == postID);
        setPost(filteredArray.length > 0 ? filteredArray[0] : {});
    }, [postID]);

    return (
        <Layout>
            <Layout.Header/>
            {Object.keys(post).length > 0 && <CompoundArticle>
                <CompoundArticle.Title>{post.title}</CompoundArticle.Title>
                <CompoundArticle.Image source={post.image}/>
                <p className=' text-zinc-600 text-xs font-semibold text-left mb-2'>25th January 2023</p>
                <CompoundArticle.Description isExpanded={true}>{post.description}</CompoundArticle.Description>
                <CompoundArticle.Views>
                    <div  className=' cursor-pointer flex flex-row place-items-center gap-2'>
                        <FaHeartPulse/>
                        <p className='text-sm font-semibold'>18.2k likes</p>
                    </div>
                    <div  className='cursor-pointer flex flex-row place-items-center gap-2'>
                        <FaEye/>
                        <p className='text-sm font-semibold'>2.3k views</p>
                    </div>
                <CompoundArticle.Button  className="ml-auto" to={"/"}>Go back</CompoundArticle.Button>
                </CompoundArticle.Views>
            </CompoundArticle>}

        </Layout>
    )
}

export default Viewpost
