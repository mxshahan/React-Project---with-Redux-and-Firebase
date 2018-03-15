import React, {Component} from 'react';
import { Link } from 'react-router-dom'

export default class LoginForm extends Component{
    render(){
        return (            
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
                    <Link to="/signup">Create an Account</Link>
                </fieldset>
            </form>
        )
    }
}

