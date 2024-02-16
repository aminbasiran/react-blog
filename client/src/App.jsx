import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Addpost from './pages/Addpost';
import Article from './pages/Article';
import Viewpost from './pages/Viewpost';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element : <Home/>
    },
    {
      path: "/article",
      element : <Article/>
    },
    {
      path: "/post/add",
      element : <Addpost/>
    },
    {
      path: "/post/:postID",
      element : <Viewpost/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
