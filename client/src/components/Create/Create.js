import React from 'react';
import * as firebase from 'firebase';
import {dataRef} from '../../config/firebase';

class Create extends React.Component{
    state = {
        speed: 10
    }

    componentDidMount() {
        const task = [];
        // dataRef.on('value', snap => {
        //     console.log(snap.val())
        //     snap.forEach(shot => {
        //         console.log(shot.val());
        //     })
        // })   
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        const projects = {
            project: this.refs.project.value,
            description: this.refs.desc.value,
        };
        dataRef.push(projects);
    }


    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Forms</div>
                <div className="panel-body">
                    <div className="col-md-6">
                        <form role="form" onSubmit={this.handleSubmitForm}>
                            <div className="form-group">
                                <label>Project Title</label>
                                <input ref="project" className="form-control" placeholder="Enter Project Name"/>
                            </div>
                            <div className="form-group">
                                <label>Project Description</label>
                                <textarea ref="desc" className="form-control" rows="6"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Upload File</label>
                                <input ref="file" type="file"/>
                                <p className="help-block">Upload a single file</p>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="reset" className="btn btn-default">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Create;