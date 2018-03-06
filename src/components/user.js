import React from 'react'
import { connect } from 'react-redux'
import { changeName } from '../store/actions'

const mapStateToProps = state => {
  return {user: state.user}
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeName: e => {
      dispatch(changeName(e.target.value))
    }
  }
}

const User = ({onChangeName, user}) => (
  <div>
    <h1>User {user.name}</h1>
    <input type='text' onChange={onChangeName} value={user.name} />
  </div>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
