import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import Login from '../views/Login';
import SignUp from '../views/SignUp';

const NonAuthRoute = (props) => (             
    <Switch>
        {props.isAuthenticated ? <Redirect to="/dashboard"/> : 
        <div>
            <Route path="/login" component={Login}/> 
            <Route path="/signup" component={SignUp}/>
        </div>
        }
    </Switch>
)
export default NonAuthRoute;