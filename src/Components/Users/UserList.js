import React from 'react'
import User from './User'
import Card from '../UI/Card'

import styles from './UserList.module.css'

function UserList({ users }) {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </Card>
  )
}

export default UserList
