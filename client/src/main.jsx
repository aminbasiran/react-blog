import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Article from './pages/Article.jsx';
import Viewpost from './pages/Viewpost.jsx';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index:true,
        path: "/home",
        element: <Home />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/post/:postID",
        element: <Viewpost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
