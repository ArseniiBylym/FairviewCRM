import React, { Component, Fragment } from 'react';
import {CustomerActivities, CustomerNotes, CustomerPricing, CustomerPricingRequests, CustomerResources } from './CustomerSubroutes'

class CustomerRoutes extends Component {
    render() {

        let activeTab = null
        switch (this.props.match.params.tabName) {
            case 'content-activities': 
                activeTab = <CustomerActivities />
                break
            case 'content-pricing': 
                activeTab = <CustomerPricing />
                break
            case 'content-pricing-requests': 
                activeTab = <CustomerPricingRequests />
                break
            case 'content-notes': 
                activeTab = <CustomerNotes />
                break
            case 'content-resources': 
                activeTab = <CustomerResources />
                break
            default: 
                activeTab = <CustomerActivities />
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