import React, { Component } from 'react';
import './Activities.scss';
import SearchForm from '../../components/SearchForm/SearchForm'
import DateRangeSelect from '../../components/SearchForm/DateRangeSelect/DateRangeSelect'
import FilterSelect from '../../components/SearchForm/FilterSelect/FilterSelect'

class Activities extends Component {
    render() {
        return (
            <div className="Activities">
                <section className="border-bottom">
                    <div className="p-2r pb-3">
                    <div className="row">
                            <div className="col-12 text-left">
                                <h1 className="t-900-h mb-4">Activities</h1>
                            </div>
                        </div>
                    </div>
                    <SearchForm>
                        <FilterSelect title={"Type"} id={"filter-type"}/>
                        <DateRangeSelect />
                    </SearchForm>
                </section>
            </div>
        );
    }
}

export default Activities;
