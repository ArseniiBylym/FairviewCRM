import React, { Component } from 'react';
import LeadsTab from './LeadsTab/LeadsTab'
import { withRouter } from "react-router";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from '../../../utils/constansts'
import CustomerRoutes from '../../../components/CustomerRoutes/CustomerRoutes'

class LeadContent extends Component {
    render() {

        const id = this.props.match.params.id;
        console.log(id);
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
                            <LeadsTab id="tab-activities" href={`/customers/${id}/content-activities`} selected={true} label="Activities"/>
                            <LeadsTab id="tab-pricing" href={`/customers/${id}/content-pricing`} selected={false} label="Pricing"/>
                            <LeadsTab id="tab-pricing-requests" href={`/customers/${id}/content-pricing-requests`} selected={false} label="Pricing Requests"/>
                            <LeadsTab id="tab-notes" href={`/customers/${id}/content-notes`} selected={false} label="Notes"/>
                            <LeadsTab id="tab-resources" href={`/customers/${id}/content-resources`} selected={false} label="Resources"/>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="p-2r pb-0">
                        <Route path={Routes.LEADS_ITEM_CONTENT} component={CustomerRoutes} />
                        <Redirect exact from='customers/:id' to={`/customers/${id}/content-activities`}/>  
                    </div>
                </section>
               </div>
            </div>
        );
    }
}

export default withRouter(LeadContent);
