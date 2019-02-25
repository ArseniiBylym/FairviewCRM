import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { PricingRequestsActions } from '../../actions/AllActions'
import {PRMainInfo, PRTable} from './components';

@inject('store')
@observer
class PricingRequestItem extends Component {

    componentDidMount = () => {
        PricingRequestsActions.setCurrentPricingRequest(this.props.match.params.id)
    }

    render() {
        console.log(this.props);
        if(!this.props.store.PricingRequests.currentRequest) return null
        const {currentRequest} = this.props.store.PricingRequests;
        
        return (
            <Fragment>
                <section class="PricingRequestItem border-bottom">
                    <div class="p-2r pb-3">
                        <div class="row">
                        <div class="col-12 text-left">
                            <h1 class="t-900-h mb-4">{currentRequest.provider.dba}</h1>
                        </div>
                        </div>
                    </div>
                </section>
                <PRMainInfo 
                    lead={currentRequest.provider.legalBusName}
                    leadId={currentRequest.provider.id}    
                    date={currentRequest.createdAt}
                    person={currentRequest.createdByUser.name}
                    status={currentRequest.complete}
                    note={currentRequest.note}
                />
                <PRTable items={currentRequest.item}/>
            </Fragment>
        );
    }
}

export default PricingRequestItem;
