import React from 'react'

const User = ({match}) => (
  <h1>User {match.params.id}</h1>
)

export default User
