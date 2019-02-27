import React, { Component, Fragment } from 'react';
import {CustomerActivities, CustomerNotes, CustomerPricing, CustomerPricingRequests, CustomerResources } from './CustomerSubroutes'
// import CustomerActivities from './CustomerSubroutes/Activities'

class CustomerRoutes extends Component {
    render() {

        const providerId = this.props.match.params.id
        let activeTab = null
        switch (this.props.match.params.tabName) {
            case 'content-activities': 
                activeTab = <CustomerActivities providerId={providerId}/>
                break
            case 'content-pricing': 
                activeTab = <CustomerPricing providerId={providerId}/>
                break
            case 'content-pricing-requests': 
                activeTab = <CustomerPricingRequests providerId={providerId}/>
                break
            case 'content-notes': 
                activeTab = <CustomerNotes providerId={providerId}/>
                break
            case 'content-resources': 
                activeTab = <CustomerResources providerId={providerId}/>
                break
            default: 
                activeTab = <CustomerActivities providerId={providerId}/>
                break

        }
        return (
            <Fragment>
                {activeTab}
            </Fragment>
        )
    }
}

export default CustomerRoutes;