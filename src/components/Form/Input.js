import React, { Component } from 'react';

class Input extends Component {
    render() {

        const {label, value, onChange} = this.props;
        return (
            <div class="form-group formGroup-alignStart">
                <label for="edit-input mr-auto">{label}</label>
                <input defaultValue={value} class="form-control" type="text" id="edit-input" />
            </div>
        )
    }
}

export default Input;