import React, { Component } from 'react';
// import './FilterCheckbox.scss';

class FilterCheckbox extends Component {
    render() {
        return (
            <div className="col-xl-2 col-lg-3">
            <div className="pt-lg-4 mt-lg-3">
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="inlineCheckbox1" type="checkbox" value="option1" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">New Activities</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" id="inlineCheckbox2" type="checkbox" value="option2" defaultChecked />
                <label className="form-check-label" htmlFor="inlineCheckbox2">With Notes</label>
              </div>
            </div>
          </div>
        );
    }
}

export default FilterCheckbox;
