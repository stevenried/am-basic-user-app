import React from 'react'

function User({ name, age }) {
  return (
    <li>
      <output>
        {name} ({age} years old)
      </output>
    </li>
  )
}

export default User
