import React from 'react'
import { Route } from 'react-router-dom'

import routes from '../routes'

const renderRoutes = function () {
  const items = []

  // Public
  items.push(routes.public.map((r, i) => {
    return <Route exact={r.exact} key={i} path={r.path} component={r.component} />
  }))

  // Private (TODO)
  items.push(routes.private.map((r, i) => {
    return <Route exact={r.exact} key={i} path={r.path} component={r.component} />
  }))

  items.push(<Route key='notFound' component={routes.notFound} />)
  return items
}

export {renderRoutes}
