import React from 'react';
import {connect} from 'react-redux';


const UserProfile = ({userdata}) => (
  <div>
    <div className="panel panel-default">
      <div className="panel-heading">
        Hi, {userdata.displayName}
      </div>
      <div className="panel-body row">
        <div className="col-md-3">
          <img src={userdata.photoURL}  className="img-circle img-thumbnail" width="100%"/>
        </div>
        <div className="col-md-9">
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