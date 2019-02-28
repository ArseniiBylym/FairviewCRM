import React, { Component, Fragment } from 'react';
import { CustomerTabsActions } from '../../../actions/AllActions'
import Spinner from '../../../components/Spinner/Spinner'
import { observer, inject } from 'mobx-react';
import ActivitiesCard from '../../../components/ActivitiesCard/ActivitiesCard';


@inject('store')
@observer
class CustomerActivities extends Component {
    componentDidMount = () => {
        CustomerTabsActions.fetchCustomerActivities(this.props.providerId)
    }

    render() {

        let activities = null;

        if(this.props.store.CustomerTabs.allActivities && this.props.store.CustomerTabs.allActivities.length > 0) {
            activities = this.props.store.CustomerTabs.allActivities.map(item => {
                return (
                    <ActivitiesCard key={item.id} config={item} widthLg={6} widthXl={4}/>
                )
            })
        }
        return (
            <Fragment>
                <section>
                    <div className="p-2r">
                        <div className="row">
                            {activities ? activities 
                             : !this.props.store.CustomerTabs.activitiesFetched ? <Spinner /> 
                             : <h4>The customer has no activities</h4> }
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export {CustomerActivities};