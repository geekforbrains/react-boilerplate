import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { renderRoutes } from './util/router'
import Nav from './components/nav'

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        {renderRoutes()}
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
