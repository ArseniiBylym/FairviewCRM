import React, { Component } from 'react';
import iconCalendar from '../../../resources/img/calendar.svg'

// import './DateRangeSelect.scss';

class DateRangeSelect extends Component {
    render() {
        return (
            <div className="form-group">
              <label htmlFor="filter-date-range">Date Range</label>
              <div className="input-group">
                <input className="form-control date-range-picker" type="text" id="filter-date-range" value="1/1/2016 - 1/1/2020" />
                <div className="input-group-append">
                <span className="input-group-text"><img src={iconCalendar} alt="Calendar icon"/></span>
                </div>
              </div>
            </div>
        );
    }
}

export default DateRangeSelect;
