import React, { Component } from 'react';
import './LeadsItem.scss';
import { observer, inject } from 'mobx-react';
import { UserActions, LeadsActions } from '../../actions/AllActions'

@inject('store')
@observer
class LeadsItem extends Component {

    componentDidMount = () => {
        LeadsActions.setCurrentLead(this.props.match.params.id)
    }

    render() {
        console.log(this.props);
        if(!this.props.store.Leads.currentLead) return null
        const {currentLead} = this.props.store.Leads;
        
        return (
            <div className="LeadsItem">
            Leads Item
            {currentLead.legalBusName}
            </div>
        );
    }
}

export default LeadsItem;
