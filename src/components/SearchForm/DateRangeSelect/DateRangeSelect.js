import React, { Component } from 'react';
// import './DateRangeSelect.scss';

class DateRangeSelect extends Component {
    render() {
        return (
            <div className="col-xl-3 col-lg-6">
            <div className="form-group">
              <label htmlFor="filter-date-range">Date Range</label>
              <div className="input-group">
                <input className="form-control date-range-picker" id="filter-date-range" />
                <div className="input-group-append">
                <span className="input-group-text"><img src="../../../resources/img/calendar.svg" alt="Calendar icon"/></span>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default DateRangeSelect;
