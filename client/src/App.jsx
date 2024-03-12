import { useState } from 'react'
import './App.css'
import { Outlet  } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Layout from './components/layout/Layout';

function App() {

  return (
    <div className='max-w-[1000px] mx-auto p-5 bg-[#f3f3f3] shadow-md'>
      <Header/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
