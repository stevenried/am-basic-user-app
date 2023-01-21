import React, { useState } from 'react'
import './App.css'
import NewUser from './Components/NewUser/NewUser'
import UserList from './Components/Users/UserList'

const DUMMY_USERS = [
  { id: 1, name: 'Steven', age: 45 },
  { id: 2, name: 'Rebecca', age: 39 },
]

function App() {
  const [users, setUsers] = useState(DUMMY_USERS)

  const addNewUserHandler = (userData) => {
    setUsers((prevUsers) => [userData, ...prevUsers])
  }

  return (
    <>
      <NewUser onNewUser={addNewUserHandler} />
      <UserList users={users} />
    </>
  )
}

export default App
