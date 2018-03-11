import React from 'react';
import Message from './Message';
import AllMessage from './AllMessage';

const NotificationBar = () => (
    <ul className="dropdown-menu dropdown-messages">
        <Message/>
        <li className="divider"></li>
        <Message/>
        <li className="divider"></li>
        <AllMessage text="All Notifications"/>
    </ul>
)

export default NotificationBar;