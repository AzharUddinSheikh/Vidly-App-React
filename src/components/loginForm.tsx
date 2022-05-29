import React from 'react';

interface LoginFormProps {
}

interface LoginFormState {
}

interface Account {
    username: string,
    password : string,
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
        account[e.currentTarget.name as keyof Account] = e.currentTarget.value;
        this.setState({account});
    }

    render() {
        const {account} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            autoFocus
                            value={account.username}
                            onChange={this.handleChange}
                            ref={this.username} 
                            id="username"
                            name='username' 
                            type="text" 
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            value={account.password}
                            onChange={this.handleChange}
                            name='password'
                            id='password' 
                            type="text" 
                            className="form-control" />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;