import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
    </Routes>
  )
}

export default Mainroutes