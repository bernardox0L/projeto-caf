import React from 'react'
import { useAuth } from '../../../contexts/auth.context'
import { Route, Redirect } from 'react-router-dom'
import { routesTypes } from '../../../resources/routesTypes'

const PrivateRoute = ({ component, ...props }) => {
  const { token } = useAuth()
  if (!token)
    return (
      <Redirect
        to={{ pathname: routesTypes.CAF_AUTH}}
      />
    )

  return <Route component={component} {...props} />
}

export { PrivateRoute }