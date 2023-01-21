import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import Profile from './components/Profile'
import Header from './components/Header'
import NotFound from './components/NotFound'
import UserInfo from './components/UserInfo'
import Register from './components/Register'
import UserDetails from './components/UserDetails'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/profile' element={<Profile />} /> */}
      <Route path='/profile/:username' element={<UserInfo />} />
      <Route path='/register' element={<Register />} />
      <Route path='/details' element={<UserDetails />} />
      <Route path='*' element={<NotFound />} />
      {/* <Route path='*' element={<Navigate to='/' />} /> */}
    </Routes>
  </BrowserRouter>
)
