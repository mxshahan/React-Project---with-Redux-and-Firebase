import React from 'react';
import Project from './Project';

const Panel = (props) => (
    <div className="panel panel-container">
        <div className="row">
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </div>
    </div>
);

export default Panel;