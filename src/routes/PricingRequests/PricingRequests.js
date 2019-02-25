import React, { Component } from 'react';
import './PricingRequests.scss';
import SearchForm from '../../components/SearchForm/SearchForm'
import DateRangeSelect from '../../components/SearchForm/DateRangeSelect/DateRangeSelect'
import FilterSelect from '../../components/SearchForm/FilterSelect/FilterSelect'
import PricingCard from '../../components/PricingCard/PricingCard';
import { PricingRequestsActions } from '../../actions/AllActions'
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class PricingRequests extends Component {

    componentDidMount = async () => {
       await PricingRequestsActions.fetchRequests();
    }


    render() {

        console.log(this.props.store);
         
        let requests = null;
        if (this.props.store.PricingRequests.requests && this.props.store.PricingRequests.requests.length > 0) {
            requests = this.props.store.PricingRequests.requests.map((item, i) => {
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
                    <SearchForm>
                        <FilterSelect title={"Status"} id={"filter-status"}/>
                        <DateRangeSelect />
                    </SearchForm>
                </section>
                <div className="p-2r">
                    <div className="row">
                        {requests}
                    </div>
                </div>
            </div>
        );
    }
}

export default PricingRequests;
