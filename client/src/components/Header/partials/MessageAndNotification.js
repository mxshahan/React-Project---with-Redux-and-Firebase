import React from 'react';
import NotificationBar from './NotificationBar';
import MessageBar from './MessageBar';

const MessageAndNotification = () => (
<ul className="nav navbar-top-links navbar-right">
    <li className="dropdown">
        <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
            <em className="fa fa-envelope"></em><span className="label label-danger">15</span>
        </a>
        <MessageBar/>
    </li>
    <li className="dropdown">
        <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
            <em className="fa fa-bell"></em><span className="label label-info">5</span>
        </a>
        <NotificationBar/>
    </li>
</ul>
)

export default MessageAndNotification;