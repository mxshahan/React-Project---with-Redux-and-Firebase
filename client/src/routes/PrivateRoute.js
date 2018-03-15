import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import DashboardContent from '../components/Dashboard/Dashboard';
import PageHead from '../components/Dashboard/partials/PageHead';


const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
    <DashboardContent>
        <PageHead {...rest}/>
      
        <Header/>
		    <Sidebar/>
        <Component {...props}/>
    </DashboardContent>    
    ) : (
      <Redirect to="/login"/>
    )
  )}/>
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);