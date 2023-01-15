import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink
          to='/'
          //className={({ isActive }) => (isActive ? 'highlight' : '')}
          style={({ isActive }) => {
            return {
              color: isActive ? 'orange' : '',
              fontSize: '18px'
            }
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/profile'
          //className={({ isActive }) => (isActive ? 'highlight' : '')}
          style={({ isActive }) => {
            return {
              color: isActive ? 'orange' : '',
              fontSize: '18px'
            }
          }}
        >
          Profile
        </NavLink>
      </li>
    </ul>
  )
}

export default Header
