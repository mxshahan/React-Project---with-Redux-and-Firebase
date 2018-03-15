import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import {startLoginWithGoogle} from '../actions/auth';

//Load CSS
import '../theme/styles/css/login.scss';

const Login = ({startLoginWithGoogle}) => (
	<div className="row">
		<div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
			<div className="login-panel panel panel-default">
				<div className="panel-heading">Log in</div>
				<div className="panel-body">						
					<div className="social-login form-group">
						<button onClick={startLoginWithGoogle} className="btn btn-social btn-google"><i className="fa fa-google"> </i> 
								&nbsp;Sign in with Google
						</button>
						{/* <button className="btn btn-social btn-facebook"><i className="fa fa-facebook"> </i> 
								&nbsp;Sign in with Facebook
						</button> */}
					</div>
					<LoginForm/>
				</div>
			</div>
		</div>
	</div>
)

const mapDispatchToProps = (dispatch) => ({
	startLoginWithGoogle: () => dispatch(startLoginWithGoogle())
})

export default connect(undefined, mapDispatchToProps)(Login);