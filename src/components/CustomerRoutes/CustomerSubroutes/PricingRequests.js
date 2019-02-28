import React, { Component, Fragment } from 'react';
import { CustomerTabsActions } from '../../../actions/AllActions'
import Spinner from '../../../components/Spinner/Spinner'
import { observer, inject } from 'mobx-react';
import PricingCard from '../../../components/PricingCard/PricingCard';


@inject('store')
@observer
class CustomerPricingRequests extends Component {
    componentDidMount = () => {
        CustomerTabsActions.fetchCustomerPricingRequests(this.props.providerId)
    }

    render() {

        let pricingRequests = null;

        if(this.props.store.CustomerTabs.allPricingRequests && this.props.store.CustomerTabs.allPricingRequests.length > 0) {
            pricingRequests = this.props.store.CustomerTabs.allPricingRequests.map(item => {
                console.log(item)
                return (
                    <PricingCard key={item.databaseId} config={item}/>
                )
            })
        }
        return (
            <Fragment>
                <section>
                    <div className="p-2r">
                        <div className="row">
                            {pricingRequests ? pricingRequests 
                                : !this.props.store.CustomerTabs.pricingRequestsFetched ? <Spinner /> 
                                : <h4>The customer has no pricing requests</h4> }
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export {CustomerPricingRequests};