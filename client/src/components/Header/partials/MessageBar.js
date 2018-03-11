import React from 'react';
import Message from './Message';
import AllMessage from './AllMessage';

const MessageBar = () => (
    <ul className="dropdown-menu dropdown-messages">
        <Message/>
        <li className="divider"></li>
        <Message/>
        <li className="divider"></li>
        <AllMessage text="All Messages"/>
    </ul>
)

export default MessageBar;