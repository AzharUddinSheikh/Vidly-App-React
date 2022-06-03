import React from 'react';
import Joi from 'joi-browser';
import Input from './common/input';


interface Account {
    username?: string,
    password? : string,
}

interface LoginFormState {
    account : Account,
    errors : Account
}

class LoginForm extends React.Component {

    state : LoginFormState = {
        account : {username : '', password : ''},
        errors : {},
    }

    schema = {
        username : Joi.string().required().label('Username'),
        password : Joi.string().required().label('Password')
    }

    validate = () => {
        let options = {abortEarly:false}
        const {error} = Joi.validate(this.state.account, this.schema, options);
        if (!error) return null;

        const errors : Account = {};
        for (let item of error.details)
            errors[item.path[0] as keyof Account] = item.message;
        return errors;
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // errors may be null but we cannot set null while calling setState
        const errors = this.validate();
        this.setState({errors : errors || {}});
        
        if (errors) return;
        console.log("submitted");
    }

    validateProperty = ({name, value} : HTMLInputElement) => {
        const obj = { [name] : value };
        const schema = { [name] : this.schema[name as keyof Account] }
        const { error } = Joi.validate(obj, schema);
        return (error) ? error.details[0].message : null;
    }

    handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {

        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(e.currentTarget);
        
        if (errorMessage) errors[e.currentTarget.name as keyof Account] = errorMessage;
        else delete errors[e.currentTarget.name as keyof Account];

        const account = {...this.state.account};
        account[e.currentTarget.name as keyof Account] = e.currentTarget.value;
        
        this.setState({account, errors});
    }

    render() {
        const {account, errors} = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        value={account.username}
                        name="username"
                        label="Username"
                        type="text"
                        error={errors.username}
                        onChange={this.handleChange}
                    />
                     <Input
                        value={account.password}
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                        label="Password"
                        error={errors.password}
                    />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;