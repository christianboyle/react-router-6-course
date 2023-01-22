import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  console.log(location)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/profile/jerry', { state: { username: 'Something else' } })
  }
  return (
    <div>
      <div>Home page</div>
      <button onClick={handleClick}>Show Profile Page</button>
    </div>
  )
}

export default Home
