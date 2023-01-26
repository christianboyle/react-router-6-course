import React from 'react'
import { Link } from 'react-router-dom'

const Friends = () => {
  return (
    <>
      <ul>
        Friends
        <li>
          <Link to='/profile-nested/jerry'>Jerry</Link>
        </li>
        <li>
          <Link to='/profile-nested/mike'>Mike</Link>
        </li>
      </ul>
    </>
  )
}

export default Friends
