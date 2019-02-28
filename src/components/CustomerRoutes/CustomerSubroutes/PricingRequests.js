import React, { Component, Fragment } from 'react';
import { CustomerTabsActions } from '../../../actions/AllActions'
import Spinner from '../../../components/Spinner/Spinner'
import { observer, inject } from 'mobx-react';
import PricingCard from '../../../components/PricingCard/PricingCard';
import iconPlusWhite from '../../../resources/img/icon-plus-white.svg'


@inject('store')
@observer
class CustomerPricingRequests extends Component {
    componentDidMount = () => {
        // CustomerTabsActions.fetchCustomerPricingRequests(this.props.providerId)
    }

    render() {

        let pricingRequests = null;

        if (this.props.store.CustomerTabs.allPricingRequests && this.props.store.CustomerTabs.allPricingRequests.length > 0) {
            pricingRequests = this.props.store.CustomerTabs.allPricingRequests.map(item => {
                return (
                    <PricingCard key={item.databaseId} config={item} widthLg={4} widthXl={4}/>
                )
            })
        }
        return (
            <Fragment>
                <section>
                    <div className="p-2r pb-0">
                        <div className="row">
                            {pricingRequests ? pricingRequests
                                : !this.props.store.CustomerTabs.pricingRequestsFetched ? <Spinner />
                                    : <h4>The customer has no pricing requests</h4>}
                            <button class="button-floating mainBgColor" type="button" data-toggle="modal" data-target="#activityCreateModal">
                                <span class="icon">
                                    <img src={iconPlusWhite} />
                                </span>
                                <span class="text">Create pricing request</span>
                            </button>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export { CustomerPricingRequests };