import React from 'react';
import {connect} from 'react-redux';

const UserProfileInfo = ({userdata}) => (
    <div className="profile-sidebar">
        <div className="profile-userpic">
            <img src="http://placehold.it/50/30a5ff/fff" className="img-responsive" alt=""/>
        </div>
        <div className="profile-usertitle">
            <div className="profile-usertitle-name">{userdata.displayName}</div>
            <div className="profile-usertitle-status"><span className="indicator label-success"></span>Online</div>
        </div>
        <div className="clear"></div>
    </div>
);

const mapStateToProps = (state) => ({
    userdata: state.auth
})

export default connect(mapStateToProps)(UserProfileInfo);