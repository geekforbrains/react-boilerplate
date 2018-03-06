import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {user: state.user}
}

const Home = ({user}) => (
  <h1>Home {user.name}</h1>
)

export default connect(
  mapStateToProps
)(Home)
