import React from 'react';

class Login extends React.Component{
	
	onSubmitHandler = (e) => {
		e.preventDefault();
	}

	render(){
		return(
			<div className="row">
				<div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
					<div className="login-panel panel panel-default">
						<div className="panel-heading">Log in</div>
						<div className="panel-body">
							<form role="form" onSubmit={this.onSubmitHandler}>
								<fieldset>
									<div className="form-group">
										<input className="form-control" placeholder="E-mail" name="email" type="email" autoFocus=""/>
									</div>
									<div className="form-group">
										<input className="form-control" placeholder="Password" name="password" type="password" value=""/>
									</div>
									<div className="checkbox">
										<label>
											<input name="remember" type="checkbox" value="Remember Me"/>Remember Me
										</label>
									</div>
									<input type="submit" className="btn btn-primary" value="Login"/>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Login;