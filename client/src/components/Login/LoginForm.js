import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class LoginForm extends Component{
    state = {
        email: false,
        pass: false,
        eErr: false,
        pErr: false
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        const {email, pass} = this.state;
        if(email && pass){
            this.props.submitLogin(email, pass);
        }
    }

    emailChangeHandler = (e) => {
        let email = e.target.value;
        if(!email){
            this.setState({
                eErr: 'Email Field Should Not Empty',
                email: false
            });
        }else{
			if(email.includes('@') && email.indexOf('@')>0 && (email.indexOf('@') != email.length-1) && (email.lastIndexOf('.') > email.indexOf('@'))){
				this.setState({
					email,
					eErr: false
				});
			}else{
				this.setState({
                    eErr: 'Enter a valid email',
                    email: false
                });				
			}
        }
    }

    passChangeHandler = (e) => {
        let pass = e.target.value;
        if(!pass){
            this.setState({
                pErr: 'Password Field Should Not Empty',
                pass: false
            })
		}else if(pass.length<8){
            this.setState({
                pErr: 'Password must be 8 character or greater',
                pass: false
            })			
		}else{
            this.setState({
                pass,
                pErr: false
            })
        }
    }

    render(){
        return (            
            <form role="form" onSubmit={this.onSubmitHandler}>
                <fieldset>
                    <div className="form-group">
                        <input className="form-control" placeholder="E-mail" name="email" type="email" autoFocus="" onBlur={this.emailChangeHandler}/>
                    </div>
                    {this.state.eErr && <p className="text text-danger">{this.state.eErr}</p>}
                    
                    <div className="form-group">
                        <input className="form-control" placeholder="Password" name="password" type="password" onBlur={this.passChangeHandler}/>
                    </div>
                    {this.state.pErr && <p className="text text-danger">{this.state.pErr}</p>}
                    
                    <div className="checkbox">
                        <label>
                            <input name="remember" type="checkbox" value="Remember Me"/>Remember Me
                        </label>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Login"/>
                    <Link to="/signup">Create an Account</Link>
                </fieldset>
            </form>
        )
    }
}

