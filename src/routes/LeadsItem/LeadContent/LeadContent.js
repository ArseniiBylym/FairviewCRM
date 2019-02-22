import React, { Component } from 'react';
import LeadsTab from './LeadsTab/LeadsTab'

class LeadContent extends Component {
    render() {
        return (
            <div className="LeadContent page-content">
               <div className="position-sticky-0">
               <section className="border-bottom">
                    <div className="p-2r">
                        <div className="row">
                            <div className="col-6">
                                <h1 className="t-900-h mb-0">{this.props.header}</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="border-bottom">
                    <div class="px-3">
                        <ul class="nav c-nav-pills" id="lead-tabs" role="tablist">
                            <LeadsTab id="tab-activities" href="#tab-content-activities" selected={true} label="Activities"/>
                            <LeadsTab id="tab-pricing" href="#tab-content-pricing" selected={false} label="Pricing"/>
                            <LeadsTab id="tab-pricing-requests" href="#tab-content-pricing-requests" selected={false} label="Pricing Requests"/>
                            <LeadsTab id="tab-notes" href="#tab-content-notes" selected={false} label="Notes"/>
                            <LeadsTab id="tab-resources" href="#tab-content-resources" selected={false} label="Resources"/>
                        </ul>
                    </div>
                </section>
               </div>
            </div>
        );
    }
}

export default LeadContent;
