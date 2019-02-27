import React, { Component } from 'react';

class TextArea extends Component {
    render() {

        const {label, value, onChange, required} = this.props;
        return (
            <div className="form-group formGroup-alignStart">
                <label htmlFor="edit-input mr-auto">{label} {required && <span className="requiredAsterisk">*</span>}</label>
                <textarea id="edit-input" className="form-control" onChange={onChange} rows="4" cols="50" >{value}</textarea>
            </div>
        )
    }
}

export default TextArea;