import React, { Component } from 'react';
import './SearchForm.scss';

class SearchForm extends Component {
    render() {
        return (
            <div className="SearchForm">
               <div className="p-2r py-0 text-left">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-xl-4 col-lg-12">
                <div className="form-group">
                  <label htmlFor="filter-search">Search</label>
                  <input className="form-control" type="search" id="filter-search" />
                </div>
              </div>
              {this.props.children}
              <div className="col-xl-2 col-lg-3">
                <div className="form-group">
                  <label>&nbsp;</label>
                  <button className="btn btn-primary btn-block" type="button">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default SearchForm;
