import React from 'react';
import Input from './common/input';

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
                    <Input
                        value={account.username}
                        name="username"
                        label="Username"
                        type="text"
                        onChange={this.handleChange}
                    />
                     <Input
                        value={account.password}
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                        label="Password"
                    />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;