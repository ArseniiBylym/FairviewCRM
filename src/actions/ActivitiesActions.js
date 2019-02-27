import { action, reaction } from 'mobx';
import { ActivitiesStore, UserStore } from '../store/AllStores';
import moment from 'moment'

import { fetchFromApi, URL_PATH } from '../api/api'

export class ActivitiesActionsClass {

    @action async fetchActivities() {
        
        const token = UserStore.accessToken
        const result = await fetchFromApi(URL_PATH.ACTIVITY, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" 
            },
        })

        if(result.data.data) {
            const activitiesArray = result.data.data.map((item, i) => {

                return {
                    id: item.id,
                    status: item.status,
                    createdAt: item.createdAt,
                    createdByUser: item.createdByUser,
                    provider: item.provider,
                    dba: item.dba,
                    activityType: item.activityType.name,
                    activityTypeId: item.activityTypeId,
                    updatedAt: item.updatedAt
                }
            })
            ActivitiesStore.activities = activitiesArray;
            ActivitiesStore.totalActivitiesAmount = result.data.total;
            ActivitiesStore.activitiesFetched = true;
        };
    }

    @action pushNewlyCreatedActivity(activity) {
        ActivitiesStore.activities.push(activity)
    }

    @action async postNewActivity(inputsValues) {
        console.log(inputsValues)

        const body = JSON.stringify(inputsValues)

        const token = UserStore.accessToken
        const result = await fetchFromApi(URL_PATH.ACTIVITY, {
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" 
            },
            data: body
        })
        if (result.data) {
            console.log(result.data)
            this.pushNewlyCreatedActivity(result.data)
        }

    }

    @action async fetchTypes() {
        const token = UserStore.accessToken
        const result = await fetchFromApi(URL_PATH.ACTIVITY_TYPE, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" 
            },
        })
        if (result.data) {
            const activitiesTypes = result.data.data.map((item, i) => {

                return {
                    id: item.id,
                    name: item.name,
                }
            })

            ActivitiesStore.types = activitiesTypes
        }
    }

    @action changeType(value) {
        ActivitiesStore.filterByType = value
    }

    @action setDatePickerDateField(startData, endData) {
        ActivitiesStore.datePickerDate = [moment().format(startData._i.slice(0, 3).join('/')), moment().format(endData._i.slice(0, 3).join('/'))]
    }

    @action searchFieldHandler(value) {
        ActivitiesStore.searchField = value.trim().toLowerCase();
    }

    @action clearSearchField() {
        ActivitiesStore.searchField = '';
    }

}