import React from 'react'
import { connect } from 'react-redux'
import { changeName } from '../store/actions'

const mapDispatchToProps = dispatch => {
  return {
    onChangeName: name => {
      dispatch(changeName(name))
    }
  }
}

const User = ({match}) => (
  <h1>User {match.params.id}</h1>
)

export default User
