import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {onLogoutUser} from '../../../actions/auth'; //Partials -> Sidebar -> Component -> actions -> auth


const SidebarNav = ({onLogoutUser}) => (
    <ul className="nav menu">
    <li><NavLink to="/dashboard" activeClassName="active"><em className="fa fa-dashboard">&nbsp;</em> Dashboard</NavLink></li>
    <li><NavLink to="/create" activeClassName="active"><em className="fa fa-edit">&nbsp;</em> Create A Project</NavLink></li>
    <li><NavLink to="/projects" activeClassName="active"><em className="fa fa-navicon">&nbsp;</em> Projects</NavLink></li>
    <li><NavLink to="/analytics" activeClassName="active"><em className="fa fa-bar-chart">&nbsp;</em> Analytics</NavLink></li>
    <li><NavLink to="/profile" activeClassName="active"><em className="fa fa-user">&nbsp;</em> Profile</NavLink></li>
    <li><span onClick={onLogoutUser} className="logout"><em className="fa fa-power-off">&nbsp;</em> Logout</span></li>
</ul>
)

const mapDispatchToProps = (dispatch) => ({
    onLogoutUser: () => dispatch(onLogoutUser())
})

export default connect(undefined, mapDispatchToProps)(SidebarNav);