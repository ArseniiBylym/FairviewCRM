import React, { Component } from 'react';

class Select extends Component {
    render() {

        const {label, options, onChange} = this.props;
        return (
            <div class="form-group formGroup-alignStart">
                <label for="l-details-edit-business-type">{label}</label>
                <select class="form-control" id="l-details-edit-business-type">
                    {options.map((item, i) => {
                        return (
                            <option value={item.value} selected={item.selected}>{item.value}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

export default Select;