import React from 'react';
import {connect} from 'react-redux';


const UserProfile = ({userdata}) => (
  <div>
    <div className="panel panel-default">
      <div className="panel-heading">
        Hi, {userdata.displayName || 'Annonymous'}
      </div>
      <div className="panel-body row">
        <div className="col-md-2 bg-info">
        {userdata.photoURL ? <img className="img-circle img-thumbnail" src={userdata.photoURL} alt=""/> : 
        <img className="img-circle img-thumbnail" src="http://www.georeferencer.com/static/img/person.png" alt=""/>}
        </div>
        <div className="col-md-10">
          {userdata.displayName ?<h3>{userdata.displayName}</h3> : 
          <h3> <strong>Annonymous</strong></h3>}
          <p className=""><b>Email: </b>{userdata.email}</p>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  userdata: state.auth
})

export default connect(mapStateToProps)(UserProfile);