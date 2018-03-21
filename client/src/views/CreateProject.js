import React from 'react';
import Create from '../components/CreateProject/CreateProject';
import {createNewProject} from '../actions/project';
import {connect} from 'react-redux';

const CreateProject = ({createProject}) => (
    <div>
        <Create handleSubmitForm={(project)=> {
            createProject(project)
        }}/>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    createProject: (project) => dispatch(createNewProject(project))
});

export default connect(undefined, mapDispatchToProps)(CreateProject);