import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/profile')
  }
  return (
    <div>
      <button onClick={handleClick}>Show Profile Page</button>
    </div>
  )
}

export default Home
