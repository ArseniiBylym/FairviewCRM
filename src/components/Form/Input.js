import React, { Component } from 'react';

class Input extends Component {
    render() {

        const {label, value, onChange, name, dataType, required} = this.props;
        return (
            <div className="form-group formGroup-alignStart">
                <label htmlFor="edit-input mr-auto">{label} {required && <span className="requiredAsterisk">*</span>}</label>
                <input name={name} data-type={dataType} onChange={onChange} value={value} className="form-control" type="text" id="edit-input" />
            </div>
        )
    }
}

export default Input;