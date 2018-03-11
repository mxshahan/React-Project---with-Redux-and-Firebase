import React from 'react';
import UserProfileInfo from './partials/UserProfileInfo';
import SearchBar from './partials/SearchBar';
import SidebarNav from './partials/SidebarNav';

const Sidebar = () => (
	<div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
		<UserProfileInfo/>
		<div className="divider"></div>
		<SearchBar/>
		<SidebarNav/>
	</div>
)


export default Sidebar;