import React, { Component } from 'react';
import './LeadsItem.scss';
import { observer, inject } from 'mobx-react';
import { UserActions, LeadsActions } from '../../actions/AllActions'
import LeadSidebar from './LeadSidebar/LeadSidebar';
import LeadContent from './LeadContent/LeadContent';
import Spinner from '../../components/Spinner/Spinner'

@inject('store')
@observer
class LeadsItem extends Component {

    componentDidMount = () => {
        LeadsActions.setCurrentLead(this.props.match.params.id)
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            LeadsActions.setCurrentLead(this.props.match.params.id)
        }
    }

    render() {
        if(!this.props.store.Leads.currentLead) return <Spinner />
        const {currentLead} = this.props.store.Leads;
        
        return (
            <div className="LeadsItem layout-wrapper">
                <LeadSidebar config={currentLead} />
                <LeadContent header={currentLead.legalBusName}/>
            </div>
        );
    }
}

export default LeadsItem;
