import React from 'react';

interface InputProps {
    name: string,
    label: string,
    value: string | number | readonly string[] | undefined,
    type : React.HTMLInputTypeAttribute | undefined,
    onChange : (e :  React.ChangeEvent<HTMLInputElement>) => void,
}
 
class Input extends React.Component<InputProps> {
    render() {
        const {name, label, value, type, onChange} = this.props;
        
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
        </div>);
    }
}
 
export default Input;