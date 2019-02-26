import React, { Component } from 'react';
import { ActivitiesActions } from '../../../actions/AllActions'

class FilterSelect extends Component {
    render() {
      const { options, selectAction } = this.props
        return (
            <div className="col-xl-2 col-lg-3">
                <div className="form-group">
                  <label htmlFor={this.props.id}>{this.props.title}</label>
                  <select className="form-control" id={this.props.id} onChange={(e) => selectAction(e.target.value)}>
                  <option value="All">All</option>
                   {options && options.map((item, i) => {
                      const name = item.name || item.groupName
                      const code = item.groupCode && item.groupCode

                      return <option key={i} value={code ? code : name}>{name}</option>
                    })}
                  </select>
                </div>
            </div>
        );
    }
}

export default FilterSelect;
