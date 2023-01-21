import React from 'react'
import { useLocation } from 'react-router-dom'

const UserDetails = () => {
  const { state } = useLocation()
  console.log(state)
  const { username, email, city, phone } = state || {}
  return (
    <div className='m-4'>
      <div className='form-details'>
        <div>
          <strong>Username:</strong> {username}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>City:</strong> {city}
        </div>
        <div>
          <strong>Phone:</strong> {phone}
        </div>
      </div>
    </div>
  )
}

export default UserDetails
