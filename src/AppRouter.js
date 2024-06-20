// src/AppRouter.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing.jsx';
import styled from 'styled-components';

const AppRouter = () => {
  return (
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          <ToastContainer />
        </div>
      </Router>
  )
}

export default AppRouter