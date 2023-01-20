import React from 'react'
import UserForm from './UserForm'

function NewUser({ onNewUser }) {
  const onNewUserSubmit = (userData) => {
    onNewUser(userData)
  }

  return <UserForm addNewUser={onNewUserSubmit} />
}

export default NewUser
