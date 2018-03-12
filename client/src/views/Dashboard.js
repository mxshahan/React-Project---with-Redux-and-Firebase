import React from 'react';
import DashboardContent from '../components/Dashboard/Dashboard';
import PageHead from '../components/Dashboard/partials/PageHead';
import Panel from '../components/Dashboard/partials/Panel';
const Dashboard = (props) => (
	<DashboardContent>
        <PageHead loc="Dashboard" title="Dashboard"/>
		<Panel/>
	</DashboardContent>
)

export default Dashboard;