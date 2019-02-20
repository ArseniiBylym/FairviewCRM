import React, { Component } from 'react';
// import './FilterSelect.scss';

class FilterSelect extends Component {
    render() {
        return (
            <div className="col-xl-2 col-lg-3">
                <div className="form-group">
                  <label htmlFor={this.props.id}>{this.props.title}</label>
                  <select className="form-control" id={this.props.id}>
                    <option>All</option>
                  </select>
                </div>
            </div>
        );
    }
}

export default FilterSelect;
