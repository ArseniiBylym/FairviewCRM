import React, { Component } from 'react';

class Select extends Component {
    render() {

        const {label, options, onChange, name, dataType} = this.props;
        return (
            <div className="form-group formGroup-alignStart">
                <label htmlFor="l-details-edit-business-type">{label}</label>
                <select onChange ={onChange} name={name} data-type={dataType} className="form-control" id="l-details-edit-business-type">
                    {options.map((item, i) => {
                        return (
                            <option key={item.value} keyvalue={item.value} value={item.value}>{item.label}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}

export default Select;