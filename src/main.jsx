import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import Profile from './components/Profile'
import Header from './components/Header'
import NotFound from './components/NotFound'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<NotFound />} />
      {/* <Route path='*' element={<Navigate to='/' />} /> */}
    </Routes>
  </BrowserRouter>
)
