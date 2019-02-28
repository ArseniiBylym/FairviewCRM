import React, { Component, Fragment } from 'react';
import { CustomerTabsActions } from '../../../actions/AllActions'
import Spinner from '../../../components/Spinner/Spinner'
import { observer, inject } from 'mobx-react';
import ActivitiesCard from '../../../components/ActivitiesCard/ActivitiesCard';
import iconPlusWhite from '../../../resources/img/icon-plus-white.svg'


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
                             <button class="button-floating mainBgColor" type="button" data-toggle="modal" data-target="#activityCreateModal">
                                <span class="icon">
                                    <img src={iconPlusWhite}/>
                                </span>
                                <span class="text">Create activity</span>
                            </button>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export {CustomerActivities};