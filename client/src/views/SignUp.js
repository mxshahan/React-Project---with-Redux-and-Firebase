import React from 'react';
import {Link} from 'react-router-dom';
import SignUpForm from '../components/SignUp/SignUpForm';

const SignUp = (props) => (
	<div className="row">
		<div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
			<div className="login-panel panel panel-default">
				<div className="panel-heading">Sign Up</div>
				<div className="panel-body">
					<SignUpForm/>
				</div>
			</div>
		</div>
	</div>
)
export default SignUp;