import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';


interface Account {
    username?: string,
    password? : string,
}

interface LoginFormState {
    data : Account,
    errors : Account
}

class LoginForm extends Form {

    state : LoginFormState = {
        data : {username : '', password : ''},
        errors : {},
    }

    schema = {
        username : Joi.string().required().label('Username'),
        password : Joi.string().required().label('Password')
    }

    doSubmit = () => {
        // call the server
        console.log("submitted");
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}

export default LoginForm;