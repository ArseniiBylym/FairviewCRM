import React, { Component } from 'react';
import iconCalendar from '../../../resources/img/calendar.svg'
import moment from 'moment'

const startOfMonth = moment().startOf('month').format('DD/MM/YYYY');
const endOfMonth   = moment().endOf('month').format('DD/MM/YYYY');

// import './DateRangeSelect.scss';

class DateRangeSelect extends Component {
    render() {
        return (
            <div className="form-group">
              <label htmlFor="filter-date-range">{this.props.title ? this.props.title : "Date Range"}</label>
              <div className="input-group">
                <input className="form-control date-range-picker" type="text" id="filter-date-range" value={`${startOfMonth} - ${endOfMonth}`} />
                <div className="input-group-append">
                <span className="input-group-text"><img src={iconCalendar} alt="Calendar icon"/></span>
                </div>
              </div>
            </div>
        );
    }
}

export default DateRangeSelect;
