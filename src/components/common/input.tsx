import React, { ReactNode } from 'react';

interface InputProps {
    name: string,
    label: string,
    value: string | number | readonly string[] | undefined,
    type : React.HTMLInputTypeAttribute | undefined,
    error : ReactNode,
    onChange : (e :  React.ChangeEvent<HTMLInputElement>) => void,
}
 
class Input extends React.Component<InputProps> {
    render() {
        const {name, label, value, type, error, onChange} = this.props;
        
        return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                autoFocus
                value={value}
                onChange={onChange}
                id={name}
                name={name} 
                type={type} 
                className="form-control" />
            {/* if error is truthy element will be displayed */}
            {error && <div className="alert alert-danger">{error}</div>}
        </div>);
    }
}
 
export default Input;