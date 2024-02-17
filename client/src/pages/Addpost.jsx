import React from 'react'
import Layout from '../components/layout.jsx/Layout'
import Dropzone from 'react-dropzone'


const Addpost = () => {
    return (
        <Layout>
            <Layout.Header/>
            <div className='w-full h-full'>
                <form>
                    <div>
                    <label htmlFor="">Title</label>

                    </div>
                    <div>
                    <input type="text" />

                    </div>

                </form>
            </div>
            
        </Layout>
    )
}

export default Addpost
