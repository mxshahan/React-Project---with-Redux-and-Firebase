import React from 'react';
import {NavLink} from 'react-router-dom';

const SidebarNav = () => (
    <ul className="nav menu">
    <li><NavLink to="/Dashboard" activeClassName="active"><em className="fa fa-dashboard">&nbsp;</em> Dashboard</NavLink></li>
    <li><NavLink to="/Create" activeClassName="active"><em className="fa fa-edit">&nbsp;</em> Create A Project</NavLink></li>
    <li><NavLink to="/Analytics" activeClassName="active"><em className="fa fa-bar-chart">&nbsp;</em> Analytics</NavLink></li>
    <li><NavLink to="/Profile" activeClassName="active"><em className="fa fa-user">&nbsp;</em> Profile</NavLink></li>
    <li><NavLink to="/login" activeClassName="active"><em className="fa fa-power-off">&nbsp;</em> Logout</NavLink></li>
</ul>
)

export default SidebarNav;