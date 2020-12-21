import React from "react"
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps
} from "react-router-dom"
import { connect } from "react-redux"

interface ReduxProps {
  isAuthenticated: boolean
}
interface Props extends ReduxProps, RouteProps {
  component: React.ComponentType<RouteComponentProps>
}

function AuthenticatedGuard(props) {
  // const { isAuthenticated, component: Component, ...rest } = props
  const { component: Component, } = props
  return (
    <Route
      // {...rest}
      render={props => {
        // if (!isAuthenticated && !localStorage.getItem("token")) {
        //   return <Redirect to="/login" />
        // }
        return <Component {...props} />
      }}
    />
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedGuard)
