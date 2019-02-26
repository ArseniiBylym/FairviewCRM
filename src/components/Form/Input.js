import React, { Component } from 'react';

class Input extends Component {
    render() {

        const {label, value, onChange, name} = this.props;
        return (
            <div className="form-group formGroup-alignStart">
                <label htmlFor="edit-input mr-auto">{label}</label>
                <input name={name} onChange={onChange} defaultValue={value} className="form-control" type="text" id="edit-input" />
            </div>
        )
    }
}

export default Input;