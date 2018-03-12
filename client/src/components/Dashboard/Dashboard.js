import React from 'react';

const DashboardContent = (props) => (
    <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
        {props.children}
    </div>
);

export default DashboardContent;