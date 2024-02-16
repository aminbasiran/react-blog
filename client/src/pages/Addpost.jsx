import React from 'react'
import Layout from '../components/layout.jsx/Layout'
const Addpost = () => {
    return (
        <Layout>
            <Layout.Header/>
            <h1 className='font-semibold px-3 py-2 cursor-pointer  text-3xl text-zinc-400  '>Create post</h1>
            <div className='w-full h-full'>
                <form>
                    <input type="text" placeholder='Title' className='w-full ml-3 text-2xl border-none bg-transparent appearance-none focus:outline-none rounded-none my-3'/>
                    <input type="text" placeholder='Tell your thoughts' className='w-full ml-3 text-md border-none bg-transparent appearance-none focus:outline-none rounded-none'/>
                    <div className='flex justify-center gap-3 my-4'>
                    <button className='cursor-pointer py-2 px-4 bg-[#939494] text-white text-xs  rounded-md'>Discard</button>
                    <button className=' cursor-pointer py-2 px-4 bg-[#3A71CA] text-white text-xs  rounded-md ' type='submit'>Publish</button>
                    </div>
                </form>
            </div>
            
        </Layout>
    )
}

export default Addpost
