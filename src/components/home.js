import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {user: state.user}
}

const Home = connect(mapStateToProps)((props) =>
  <h1>Home {props.user.name}</h1>
)

export default Home
