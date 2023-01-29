import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ProfileNested = ({ isLoggedIn }) => {
  return (
    <>
      <div>This is profile page</div>
      <Link to='/profile-nested/friends'>Show friends</Link>
      {isLoggedIn ? <Outlet /> : 'Please Log In.'}
    </>
  )
}

export default ProfileNested
