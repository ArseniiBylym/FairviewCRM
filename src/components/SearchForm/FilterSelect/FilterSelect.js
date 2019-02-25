import React, { Component } from 'react';
import { ActivitiesActions } from '../../../actions/AllActions'

// import './FilterSelect.scss';

class FilterSelect extends Component {
    render() {
      const { options } = this.props
      console.log(options)
        return (
            <div className="col-xl-2 col-lg-3">
                <div className="form-group">
                  <label htmlFor={this.props.id}>{this.props.title}</label>
                  <select className="form-control" id={this.props.id} onChange={(e) => ActivitiesActions.changeType(e.target.value)}>
                  <option value="All">All</option>
                   {options && options.map((item, i) => (
                      <option key={i} value={item.name}>{item.name}</option>
                   ))}
                  </select>
                </div>
            </div>
        );
    }
}

export default FilterSelect;
