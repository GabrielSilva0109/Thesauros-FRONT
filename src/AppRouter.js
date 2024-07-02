// src/AppRouter.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


//Pages
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing.jsx'
import ThemeProvider from './ThemeProvider'
import Mission from './components/Mission/Mission.jsx'
import Games from './components/Games/Games.jsx'
import Contact from './components/Contact/Contact.jsx'
import Login from './components/Login/Login.jsx'
import Minefield from './components/Minefield/Minefield.jsx'
import Roulette from './components/Roulette/Roulette.jsx'
import Users from './components/Users/Users.jsx'

const AppRouter = () => {  
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            {/* Landing Page  */}
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/games" element={<Games />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            {/* User Login */}
            <Route path='/minefield' element={<Minefield/>} />
            <Route path='/roulette' element={<Roulette />} />
            <Route path='/users' element={<Users />} />
          </Routes>
          <ToastContainer />
        </div>
      </Router>
    </>
    
  )
}

export default AppRouter