import React, { Component } from 'react';
import Fragment from 'react';
import iconUser from '../../resources/img/icon-user.svg'
import iconHome from '../../resources/img/icon-home.svg'
import { observer, inject } from 'mobx-react';
import { UserStore } from '../../store/AllStores';
import { URL_PATH, fetchFromApi } from '../../api/api'
import { ActivitiesActions } from '../../actions/AllActions'
import moment from 'moment'


@inject('store')
@observer
class ActivitiesCard extends Component {

    makeComplete = async () => {
        const { id, status } = this.props.config

        const changedStatus = status === 'O' ? 'C' : 'O'
        const body = JSON.stringify({
            activity_id: id,
            status: changedStatus
        })

        try {
            const token = UserStore.accessToken

            const result = await fetchFromApi(`${URL_PATH.ACTIVITY}/${id}`, {
                method: 'patch',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json" 
                },
                data: body
            })

            const updatedActivities = await ActivitiesActions.fetchActivities();

            const data = result.data;
            if (data) {

                return result
            }

        } catch (err) {
        }
    }

    render() {
        const { id, status, activityType, createdAt, createdByUser, dba, provider, updatedAt } = this.props.config;

        return (
                <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="c-card c-card-shadow p-0">
                <div className="p-3 border-bottom"><a href="lead.html">
                    <div className="t-600-h text-truncate">{activityType}</div></a>
                    <div className="t-400 c-gray-400">{moment(createdAt).format('MMM Do, h:mma')}</div>
                </div>
                <div className="px-3 pb-0 pt-3">
                    <div className="media mb-3"><img className="icon-16 mt-1 mr-3 ml-1" src={iconHome} alt="user icon" />
                    <div className="media-body">
                        {/* <div className="t-400">{provider.legalBusName}</div> */}
                    </div>
                    </div>
                    <div className="media"><img className="icon-16 mt-1 mr-3 ml-1" src={iconUser} alt="home icon" />
                    <div className="media-body">
                        <div className="t-400">{createdByUser.name}</div>
                        <div className="t-400 c-gray-400">813-999-2700</div>
                    </div>
                    </div>
                </div>
                <div className="p-3">
                    {status === "O" && <button className="btn btn-accent btn-block" type="button" onClick={() => this.makeComplete()}>Make complete</button>}
                </div>
                </div>
            </div>
        )}
}

export default ActivitiesCard;
