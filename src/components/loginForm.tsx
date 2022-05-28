import React, { Component } from 'react';

interface LoginFormProps {
}

interface LoginFormState {
}

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {

    state = {
        account : {username : '', password : ''}
    }

    username = React.createRef<HTMLInputElement>();
    // componentDidMount() {
    //     this.username.current?.focus();
    // }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const account = {...this.state.account};
        account.username = e.currentTarget.value;
        this.setState({account});
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            autoFocus
                            value={this.state.account.username}
                            onChange={this.handleChange}
                            ref={this.username} 
                            id="username" 
                            type="text" 
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id='password' type="text" className="form-control" />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;