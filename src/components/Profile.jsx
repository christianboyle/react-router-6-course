import React from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'

const users = [
  {
    name: 'mike',
    age: 20,
    location: 'NY'
  },
  {
    name: 'jerry',
    age: 50,
    location: 'London'
  }
]

const Profile = () => {
  const { state } = useLocation()
  console.log(state)
  const { username } = useParams()
  console.log('username: ', username)
  const user = users.find((user) => user.name === username)
  if (!user) {
    return <Navigate to='/' state={{ value: 'User not found' }} />
    // return <div>Profile page</div>
  }
  return <div>{JSON.stringify(user, null, 2)}</div>
}

export default Profile
