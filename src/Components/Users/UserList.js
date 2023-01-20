import React from 'react'
import User from './User'

function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  )
}

export default UserList
