import React from 'react';

const Message = (props) => (
<li>
    <div className="dropdown-messages-box">
      <a href="profile.html" className="pull-left">
        <img alt="image" className="img-circle" src="http://placehold.it/40/30a5ff/fff"/>
      </a>
      <div className="message-body"><small className="pull-right">3 mins ago</small>
        <a href="#"><strong>John Doe</strong> commented on <strong>your photo</strong>.</a>
      <br /><small className="text-muted">1:24 pm - 25/03/2015</small></div>
    </div>
  </li>
);

export default Message;