import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './components/Home/Home'

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={ <Home />}/>
        </Routes>
        <ToastContainer />
      </Router>
    )
  }
  
export default AppRouter