import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';

import AuthRoute from './AuthRoute'
import NonAuthRoute from './NonAuthRoute'

class AppRouter extends React.Component{
  state = {
    isAuthenticated: true
  }
  render(){
    return(
      <Router>
          {this.state.isAuthenticated ? <AuthRoute isAuthenticated={this.state.isAuthenticated}/>
          : <NonAuthRoute isAuthenticated={this.state.isAuthenticated}/>}
      </Router>
    )
  }
}

export default AppRouter;