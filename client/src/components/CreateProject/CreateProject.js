import React from 'react';
import '../../theme/styles/css/createproject.css';
import axios from 'axios';
import {firebase} from '../../config/firebase'

class Create extends React.Component{
    state = {
        speed: 10, 
        selectedFile: null,
        progress: false,
        uploadedImage: [],
        projectName: '',
        projectDescription: ''
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        let projects = {
            project: this.state.projectName,
            description: this.state.projectDescription,
            imageURL: this.state.uploadedImage
        };
    
        // Sending to it's parent CREATE -> views/CreateProject.js
        this.props.handleSubmitForm(projects);
        this.setState({
            projectName: '',
            projectDescription: '',
            imageURL: []
        })    
    }

    handleFileUpload = (e) => {
        this.setState({
            progress: null
        })
        const file = e.target.files[0];        
        const storageRef = firebase.storage().ref('projects/'+ file.name);
        const task = storageRef.put(file).then((res) => {
            this.setState({                
                progress: true,
                selectedFile: null, 
                //Getting the uploaded file URL
                uploadedImage: this.state.uploadedImage.concat(res.metadata.downloadURLs[0]) 
            })
        }).catch((e)=>{
            console.log("Error", e)
        })
    }


    render(){
        // console.log(this.state)
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Forms</div>
                <div className="panel-body">
                    <div className="col-md-6">
                        <form role="form" onSubmit={this.handleSubmitForm}>
                            <div className="form-group">
                                <label>Project Title</label>
                                <input ref="project" className="form-control" placeholder="Enter Project Name" onChange={(e)=> {
                                    let value = e.target.value;
                                    this.setState({
                                        projectName: value
                                    });
                                }}/>
                            </div>
                            <div className="form-group">
                                <label>Project Description</label>
                                <textarea ref="desc" className="form-control" rows="6" onChange={(e) => {
                                    let value = e.target.value;
                                    this.setState({
                                        projectDescription: value
                                    });
                                }}></textarea>
                            </div>
                            <div className="form-group">
                                <p>Upload File</p>
                                <input 
                                    ref={fileInput => this.fileInput = fileInput} 
                                    type="file"
                                    onChange={this.handleFileUpload}
                                    style={{display: 'none'}}
                                />

                                {this.state.uploadedImage && this.state.uploadedImage.map((image, index) =>{
                                    return (
                                        <button key={index} className="uploadedImage">
                                            <img src={image}/>
                                            <span className="closeBtn">X</span>
                                        </button>
                                    )
                                })}
                                

                                <span onClick={() => this.fileInput.click()} className="uploadImage">+</span>
                                
                                <div className="progressBar">
                                    {this.state.progress === null && <p className="alert alert-warning">Please Wait...</p>}
                                    {this.state.progress && <p className="alert alert-success">Successfully Uploaded</p>}
                                </div>
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