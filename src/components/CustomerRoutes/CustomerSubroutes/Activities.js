import React, { Component, Fragment } from 'react';
import { CustomerTabsActions } from '../../../actions/AllActions'
import Spinner from '../../../components/Spinner/Spinner'
import { observer, inject } from 'mobx-react';
import ActivitiesCard from '../../../components/ActivitiesCard/ActivitiesCard';


@inject('store')
@observer
class CustomerActivities extends Component {
    componentDidMount = () => {
        console.log('Activities mount')
        CustomerTabsActions.fetchCustomerActivities(this.props.providerId)
    }



    render() {

        let activities = null;

        if(this.props.store.CustomerTabs.allActivities && this.props.store.CustomerTabs.allActivities.length > 0) {
            activities = this.props.store.CustomerTabs.allActivities.map(item => {
                console.log(item)
                return (
                    <ActivitiesCard key={item.id} config={item}/>
                )
            })
        }
        return (
            <Fragment>
                <section>
                    <div className="p-2r">
                        <div className="row">
                            {activities}
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default CustomerActivities;