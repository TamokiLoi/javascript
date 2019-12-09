import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'admin',
            password: '123456'
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onLogin = (event) => {
        event.preventDefault();
        var { username, password } = this.state;
        if (username === 'admin' && password === '123456') {
            localStorage.setItem('user', JSON.stringify({
                username: username,
                password: password
            }));
        }
    }

    render() {
        var { username, password } = this.state;
        var loggedInUser = localStorage.getItem('user');
        
        if (loggedInUser !== null) {
            var { location } = this.props;
            return <Redirect to={{
                pathname: '/product',
                state: {
                    from: location
                }
            }} />
        }

        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={this.onLogin}>
                        <legend>Login</legend>

                        <div className="form-group">
                            <label >Username :</label>
                            <input type="text" className="form-control"
                                name="username"
                                value={username}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label >Password :</label>
                            <input type="password" className="form-control"
                                name="password"
                                value={password}
                                onChange={this.onChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
