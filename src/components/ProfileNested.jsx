import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ProfileNested = () => {
  return (
    <>
      <div>This is profile page</div>
      <Link to='/profile-nested/friends'>Show friends</Link>
      <Outlet />
    </>
  )
}

export default ProfileNested
