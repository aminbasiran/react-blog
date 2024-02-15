import React from 'react'
import Layout from '../components/layout.jsx/Layout'
import CompoundArticle from '../components/post/CompoundPost'
import { FaHeartPulse } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const Viewpost = () => {

    

    return (
        <Layout>
            <Layout.Header/>
            <CompoundArticle>
                <CompoundArticle.Title>Building a Full-Stack Blog Application: A Step-by-Step Tutorial</CompoundArticle.Title>
                <CompoundArticle.Image source="https://realprogramming.com/wp-content/uploads/2021/02/online-coding-classes.jpg"/>
                <p className=' text-zinc-600 text-xs font-semibold text-left mb-2'>25th January 2023</p>
                <CompoundArticle.Description isExpanded={true}>Blogging has become an essential tool for individuals and organizations alike to share their thoughts, opinions, and knowledge with the world. With the advancement of technology, creating and managing a blog has become easier than ever. In this post, we will discuss how to build a blog post app using React, Node.js and MySQL. By combining these technologies, we can create a powerful and dynamic blog post app that will allow users to create, view, and interact with blog posts. We’ll be creating a database to store posts and user information using MySQL, we'll use Node.js and Express to create a server that interacts with the database. Next, we'll build a front-end user interface using React, allowing users to create and edit blog posts. By the end of this tutorial, you will have gained a solid understanding of how to integrate these technologies to create a fully functional web application. So let's get started and learn how to build a blog post app with React, Node.js, and MySQL.</CompoundArticle.Description>
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

        </Layout>
    )
}

export default Viewpost
