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
      </ul>
    </>
  )
}

export default Header
