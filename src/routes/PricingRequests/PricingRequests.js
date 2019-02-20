import React, { Component } from 'react';
import './PricingRequests.scss';
import SearchForm from '../../components/SearchForm/SearchForm'
import DateRangeSelect from '../../components/SearchForm/DateRangeSelect/DateRangeSelect'
import FilterSelect from '../../components/SearchForm/FilterSelect/FilterSelect'

class PricingRequests extends Component {
    render() {
        return (
            <div className="PricingRequests">
                <section className="border-bottom">
                    <div className="p-2r pb-3">
                    <div className="row">
                            <div className="col-12 text-left">
                                <h1 className="t-900-h mb-4">Pricing requests</h1>
                            </div>
                        </div>
                    </div>
                    <SearchForm>
                        <FilterSelect title={"Status"} id={"filter-status"}/>
                        <DateRangeSelect />
                    </SearchForm>
                </section>
            </div>
        );
    }
}

export default PricingRequests;
