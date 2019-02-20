import React, { Component } from 'react';
import './Leads.scss';
import SearchForm from '../../components/SearchForm/SearchForm'
import DateRangeSelect from '../../components/SearchForm/DateRangeSelect/DateRangeSelect'
import FilterSelect from '../../components/SearchForm/FilterSelect/FilterSelect'
import FilterCheckbox from '../../components/SearchForm/FilterCheckbox/FilterCheckbox'

class Leads extends Component {
    render() {
        return (
            <div className="Leads">
                <section className="border-bottom">
                    <div className="p-2r pb-3">
                        <div className="row">
                            <div className="col-12 text-left">
                                <h1 className="t-900-h mb-4">Leads</h1>
                            </div>
                        </div>
                    </div>
                    <SearchForm>
                        <FilterSelect title={"Group"} id={"filter-group"}/>
                        <FilterSelect title={"Type"} id={"filter-type"}/>
                        <FilterCheckbox />
                    </SearchForm>
                </section>
            </div>
        );
    }
}

export default Leads;
