import React from 'react'
import { useParams } from 'react-router-dom'

const Friend = () => {
  const { name } = useParams()

  return <p>Welcome, {name}</p>
}

export default Friend
