import React from 'react'
import { useParams } from 'react-router-dom'

const UserInfo = () => {
  const { username } = useParams()
  return <div>This page will show details of user {username}</div>
}

export default UserInfo
