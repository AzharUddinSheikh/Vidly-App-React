import React from 'react';
import Input from './common/input';


interface Account {
    username?: string,
    password? : string,
}

class LoginForm extends React.Component {

    state = {
        account : {username : '', password : ''},
        errors : {},
    }

    // username = React.createRef<HTMLInputElement>();

    validate = () => {
        const errors : Account = {};
        const {account} = this.state;
        
        if (account.username.trim() === '') 
            errors.username = 'Username is required.';
        if (account.password.trim() === '')
            errors.password = 'Password is required.';
        
            return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({errors});
        
        if (errors) return;
        console.log("submitted");
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