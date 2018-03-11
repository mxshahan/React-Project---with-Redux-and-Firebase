import React from 'react';

const UserProfileInfo = () => (
    <div className="profile-sidebar">
        <div className="profile-userpic">
            <img src="http://placehold.it/50/30a5ff/fff" className="img-responsive" alt=""/>
        </div>
        <div className="profile-usertitle">
            <div className="profile-usertitle-name">Username</div>
            <div className="profile-usertitle-status"><span className="indicator label-success"></span>Online</div>
        </div>
        <div className="clear"></div>
    </div>
);

export default UserProfileInfo;