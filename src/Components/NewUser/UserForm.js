import React, { useState } from 'react'

function UserForm({ addNewUser }) {
  const [userName, setUserName] = useState('')

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault()

    if (userName === '') return null

    const userData = {
      name: userName,
      id: crypto.randomUUID(),
    }

    addNewUser(userData)
    setUserName('')
  }

  return (
    <form onSubmit={submitHandler}>
      <label>User Name</label>
      <input
        value={userName}
        type="text"
        placeholder="Enter user name"
        onChange={userNameChangeHandler}
      />
      <button type="submit">Add User</button>
    </form>
  )
}

export default UserForm
