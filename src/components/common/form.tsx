import React, { Component } from 'react';
import { Joi } from 'joi-browser';
import Input from './input';

interface FormState {
    data : any,
    errors : any
}
 
class Form extends React.Component<FormState> {
    [x: string]: any;

    state : FormState= {
        data : {},
        errors : {}
    }

    validate = () => {
        let options = {abortEarly:false}
        const {error} = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;

        const errors : any = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors;
    }

    validateProperty = ({name, value} : HTMLInputElement) => {
        const obj = { [name] : value };
        const schema = { [name] : this.schema[name] }
        const { error } = Joi.validate(obj, schema);
        return (error) ? error.details[0].message : null;
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // errors may be null but we cannot set null while calling setState
        const errors = this.validate();
        this.setState({errors : errors || {}});
        
        if (errors) return;
        this.doSubmit();
    }

    handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {

        const errors : any = {...this.state.errors};
        const errorMessage = this.validateProperty(e.currentTarget);
        
        if (errorMessage) errors[e.currentTarget.name] = errorMessage;
        else delete errors[e.currentTarget.name];

        const data : any = {...this.state.data};
        data[e.currentTarget.name] = e.currentTarget.value;
        
        this.setState({data, errors});
    }

    isDisabled = () => {
        return this.validate() ? true : false;
    }

    renderInput (name : string, label : string, type : string = "text") {
        const {data, errors} = this.state;
        return (
            <Input
                value={data[name]}
                name={name}
                label={label}
                type={type}
                error={errors[name]}
                onChange={this.handleChange}
            />
        )
    }

    renderButton(label : string) {
        return (
            <button 
                // disabled={this.isDisabled()} 
                className="btn btn-primary">
                {label}
            </button>
        )
    }
}
 
export default Form;