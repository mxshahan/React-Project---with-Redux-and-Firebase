import React from 'react';
import indexRouter from './indexRouter';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';

const AuthRoute = (props) => (
  <div>
    <Header/> 
    <Sidebar/>              
    <Switch>
      {
          indexRouter.map((prop, key) => {
          return (                      
            prop.path ? 
            ( 
              props.isAuthenticated ? <Route path={prop.path} component={prop.component} key={key} exact={prop.exact}/>         
              : <Redirect path="/login"/>
            )
            :
            <Route component={prop.component} key={key}/>
          )
        })
      }
    </Switch>
  </div>
)
export default AuthRoute;