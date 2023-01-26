import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import Profile from './components/Profile'
import Header from './components/Header'
import Register from './components/Register'
import UserDetails from './components/UserDetails'
import Products from './components/Products'
import ProfileNested from './components/ProfileNested'
import Friend from './components/Friend'
import Friends from './components/Friends'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile/:username' element={<Profile />} />
      <Route path='/register' element={<Register />} />
      <Route path='/details' element={<UserDetails />} />
      <Route path='/products' element={<Products />} />
      <Route path='/profile-nested' element={<ProfileNested />}>
        <Route path='friends' element={<Friends />} />
        <Route path=':name' element={<Friend />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  </BrowserRouter>
)
