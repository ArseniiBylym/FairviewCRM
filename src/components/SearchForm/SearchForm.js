import React, { Component } from 'react';
import './SearchForm.scss';
import { ActivitiesActions, PricingRequestsActions } from '../../actions/AllActions'
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
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
                    <input
                      type="search"
                      className="form-control"
                      id="filter-search"
                      onChange={(e) => {
                        this.props.searchAction(e.target.value)
                        // ActivitiesActions.searchFieldHandler(e.target.value)
                      }}
                    />
                  </div>
                </div>
                {this.props.children}
                {/* <div className="col-xl-2 col-lg-3">
                  <div className="form-group">
                    <label>&nbsp;</label>
                    <button className="btn btn-block mainBgColor" type="button">Search</button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;