import React, {useEffect} from 'react'
import Layout from '../components/layout/Layout'
import { postObject } from '../resources';
import Post from '../components/post/Post';

const Home = () => {


    return (
        <Layout>
            <Layout.Header/>
            <Layout.Navbar/>
            {postObject.map(post => <Post post={post} key={post.id}/>)}
        </Layout>
    )
}

export default Home
