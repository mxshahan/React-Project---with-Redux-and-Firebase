import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import Login from '../views/Login';

const NonAuthRoute = (props) => (             
    <Switch>
        {props.isAuthenticated ? <Redirect to="/dashboard"/> : <Route component={Login}/> }
    </Switch>
)
export default NonAuthRoute;