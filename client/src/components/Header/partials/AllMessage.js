import React from 'react';

const AllMessage = (props) => (
<li>
    <div className="all-button"><a href="#">
      <em className="fa fa-inbox"></em> <strong>{props.text}</strong>
    </a></div>
</li>
)

export default AllMessage;