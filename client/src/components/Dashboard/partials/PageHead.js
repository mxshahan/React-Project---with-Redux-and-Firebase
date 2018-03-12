import React from 'react';

const PageHead = (props) => (
    <div>
        <div className="row">
            <ol className="breadcrumb">
                <li><a href="#">
                    <em className="fa fa-home"></em>
                </a></li>
                <li className="active">{props.loc}</li>
            </ol>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">{props.title}</h1>
            </div>
        </div>
    </div>
)

export default PageHead;