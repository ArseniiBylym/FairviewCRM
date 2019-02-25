import React, { Component } from 'react';
import './PricingRequests.scss';
import SearchForm from '../../components/SearchForm/SearchForm'
import DateRangeSelect from '../../components/SearchForm/DateRangeSelect/DateRangeSelect'
import FilterSelect from '../../components/SearchForm/FilterSelect/FilterSelect'
import PricingCard from '../../components/PricingCard/PricingCard';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { PricingRequestsActions } from '../../actions/AllActions';
import { observer, inject } from 'mobx-react';
import Spinner from '../../components/Spinner/Spinner'

@inject('store')
@observer
class PricingRequests extends Component {

    componentDidMount = async () => {
       await PricingRequestsActions.fetchRequests();
       
    }

    componentWillUnmount = () => {
        PricingRequestsActions.clearSearchField();
    }

    render() {
        let requests = null;

        if (this.props.store.PricingRequests.filteredRequests.length > 0) {
            requests = this.props.store.PricingRequests.filteredRequests.map((item, i) => {
                return (
                    <PricingCard key={item.databaseId} config={item}/>
                )
            })
        }

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
                    <SearchForm searchAction={(value) => PricingRequestsActions.searchFieldHandler(value)}>
                        <FilterSelect title={"Status"} id={"filter-status"}/>
                        <DateRangePicker startDate="1/1/2016" endDate="1/1/2020" className="col-xl-3 col-lg-6" onApply={(e, picker) => PricingRequestsActions.setDatePickerDateField(picker.startDate, picker.endDate)}>
                            <DateRangeSelect />
                        </DateRangePicker>
                    </SearchForm>
                    
                </section>
                <div className="p-2r">
                    <div className="row">
                        {requests ? requests : <Spinner />}
                    </div>
                </div>
            </div>
        );
    }
}

export default PricingRequests;
