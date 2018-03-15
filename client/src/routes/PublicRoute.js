import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({isAuthenticated, component: Component, ...rest}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
        <Redirect to="/dashboard"/>
    ) : (
        <Component {...props}/>
    )
  )}/>
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute);