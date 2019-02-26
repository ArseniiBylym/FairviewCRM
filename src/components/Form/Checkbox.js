import React, { Component } from 'react';

class Checkbox extends Component {
    render() {

        const {label, checked, onChange} = this.props;
        return (
            <div className="form-check formGroup-alignStart">
                <input checked={checked} className="form-check-input" id="l-contact-person-edit-primary-contact" type="checkbox" value=""/>
                <label className="form-check-label" for="l-contact-person-edit-primary-contact">{label}</label>
            </div>
        )
    }
}

export default Checkbox;