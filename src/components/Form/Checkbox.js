import React, { Component } from 'react';

class Checkbox extends Component {
    render() {

        const {label, checked, onChange} = this.props;
        return (
            <div class="form-check formGroup-alignStart">
                <input checked={checked} class="form-check-input" id="l-contact-person-edit-primary-contact" type="checkbox" value=""/>
                <label class="form-check-label" for="l-contact-person-edit-primary-contact">{label}t</label>
            </div>
        )
    }
}

export default Checkbox;