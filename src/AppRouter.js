// src/AppRouter.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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

const AppRouter = () => {
  return (
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/games" element={<Games />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <ToastContainer />
        </div>
      </Router>
  )
}

export default AppRouter