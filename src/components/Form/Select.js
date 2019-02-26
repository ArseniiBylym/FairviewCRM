import React, { Component } from 'react';

class Select extends Component {
    render() {

        const {label, options, onChange} = this.props;
        return (
            <div className="form-group formGroup-alignStart">
                <label htmlFor="l-details-edit-business-type">{label}</label>
                <select className="form-control" id="l-details-edit-business-type">
                    {options.map((item, i) => {
                        return (
                            <option key={item.value} keyvalue={item.value} selected={item.selected}>{item.value}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

export default Select;