import React, {useEffect} from 'react'
import Layout from '../components/layout/Layout'
import postObject from '../resources.json';
import Post from '../components/post/Post';


const Home = () => {
    return (
        <Layout>
            {postObject.map(post => <Post post={post} key={post.id}/>)}
        </Layout>
    )
}

export default Home
