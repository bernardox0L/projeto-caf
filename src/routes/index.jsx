import React from 'react'

import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { PrivateRoute } from './modules/PrivateRoute'
import { useAuth } from '../contexts/auth.context'
import { routesTypes } from '../resources/routesTypes'
import { LoginPage } from '../pages/LoginPage'
import { ListReportsPage } from '../pages/ListReportsPage'
import { ListExecutionsPage } from '../pages/ListExecutionsPage'

const Routes = () => {
  const { token } = useAuth()
  return (
    <HashRouter>
      <Switch>
        {!token && (
          <Route path={routesTypes.CAF_AUTH} component={LoginPage} />
        )}

        <PrivateRoute
          path={routesTypes.CAF_EXECUTIONS}
          component={props => <ListExecutionsPage {...props}/>}
        />

        <PrivateRoute
          path={routesTypes.CAF_ROOT}
          component={props => <ListReportsPage {...props}/>}
        />

        <Redirect
          from="/"
          to={token ? routesTypes.CAF_ROOT : routesTypes.CAF_AUTH}
        />
      </Switch>
    </HashRouter>
  )
}

export { Routes }