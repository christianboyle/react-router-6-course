import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Friends from './Friends'

const ProfileNested = () => {
  return (
    <>
      <div>This is profile page</div>
      <Link to='/profile-nested/friends'>Show friends</Link>
      <Routes>
        <Route path='friends' element={<Friends />} />
      </Routes>
    </>
  )
}

export default ProfileNested
