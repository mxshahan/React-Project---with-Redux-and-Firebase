import React from 'react';
import {
  Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//COMPONENTS
import Dashboard from '../views/Dashboard';
import UserProfile from '../views/UserProfile';
import Analytics from '../views/Analytics';
import NotFound from '../views/NotFound';
import Login from '../views/Login';
import CreateProject from '../views/Create';
import SignUp from '../views/SignUp';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute path="/" exact={true} component={Dashboard} loc="Dashboard" title="Dashboard"/>
      <PrivateRoute path="/dashboard" component={Dashboard} loc="Dashboard" title="Dashboard"/>
      <PrivateRoute path="/create" component={CreateProject} loc="Create" title="Create Project"/>
      <PrivateRoute path="/analytics" component={Analytics} loc="Analytics" title="Analytics"/>
      <PrivateRoute path="/profile" component={UserProfile} loc="Profile" title="Your Profile"/>
      <PublicRoute path="/login" component={Login}/>
      <PublicRoute path="/signup" component={SignUp}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
)



export default AppRouter;