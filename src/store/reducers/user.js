import { CHANGE_NAME } from '../actions'

const defaultState = {
  name: 'Foo'
}

export default function userReducer (user = defaultState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {...user, name: action.payload}
    default:
      return user
  }
}
