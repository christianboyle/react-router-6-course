import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'highlight' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile'
            className={({ isActive }) => (isActive ? 'highlight' : '')}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/register'
            className={({ isActive }) => (isActive ? 'highlight' : '')}
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/products'
            className={({ isActive }) => (isActive ? 'highlight' : '')}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/profile-nested'
            className={({ isActive }) => (isActive ? 'highlight' : '')}
          >
            Nested Profile
          </NavLink>
        </li>
      </ul>
    </>
  )
}

export default Header
