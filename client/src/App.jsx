import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'
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
      path: "/post/:postID",
      element : <Viewpost/>
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
