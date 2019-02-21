import React, { Component } from 'react';
import './Leads.scss';
import SearchForm from '../../components/SearchForm/SearchForm'
import DateRangeSelect from '../../components/SearchForm/DateRangeSelect/DateRangeSelect'
import FilterSelect from '../../components/SearchForm/FilterSelect/FilterSelect'
import FilterCheckbox from '../../components/SearchForm/FilterCheckbox/FilterCheckbox'
import { observer, inject } from 'mobx-react';
import { UserActions, LeadsActions } from '../../actions/AllActions'
import LeadsCard from '../../components/LeadsCard/LeadsCard';
import { toJS } from 'mobx'

@inject('store')
@observer
class Leads extends Component {

    componentDidMount = async () => {
        const result = await LeadsActions.fetchLeads();
    }


    render() {
        console.log(this.props.store);
         
        let leads = null;
        if (this.props.store.Leads.leads && this.props.store.Leads.leads.length > 0) {
            leads = this.props.store.Leads.leads.map((item, i) => {
                return (
                    <LeadsCard key={item.databaseId} config={item}/>
                )
            })
        }


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
                <div className="p-2r">
                    <div className="row">
                        {leads}
                    </div>
                </div>
            </div>
        );
    }
}

export default Leads;
