import React, { useState } from 'react'

import Card from '../UI/Card'
import Button from '../UI/Button'

import styles from './UserForm.module.css'
import ErrorModal from '../UI/ErrorModal'

function UserForm({ addNewUser }) {
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')
  const [error, setError] = useState()

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const inputIsEmpty =
      userName.trim().length === 0 || userAge.trim().length === 0

    if (inputIsEmpty) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      })

      return
    }

    if (+userAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter an age greater than 0.',
      })

      return
    }

    const userData = {
      name: userName,
      age: userAge,
      id: crypto.randomUUID(),
    }

    addNewUser(userData)
    setUserName('')
    setUserAge('')
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error ? (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      ) : null}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            value={userName}
            type="text"
            placeholder="Enter user name"
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            value={userAge}
            type="number"
            placeholder="Enter age"
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default UserForm
