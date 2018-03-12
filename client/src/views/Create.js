import React from 'react';
import DashboardContent from '../components/Dashboard/Dashboard'
import Create from '../components/Dashboard/Create';
import PageHead from '../components/Dashboard/partials/PageHead';
const CreateProject = () => (
    <DashboardContent>
        <PageHead loc="Create" title="Create Proejct"/>
        <Create/>
    </DashboardContent>
)

export default CreateProject;