import { action, reaction } from 'mobx';
import { ActivitiesStore, UserStore } from '../store/AllStores';

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

        console.log(result.data.data);
        if(result.data.data) {
            const activitiesArray = result.data.data.map((item, i) => {
                console.log(item);

                return {
                    id: item.id,
                    status: item.status,
                    createdAt: item.createdAt,
                    createdByUser: item.createdByUser,
                    provider: item.provider,
                    dba: item.dba,
                    activityType: item.activityType.name,
                    updatedAt: item.updatedAt
                }
            })
            console.log(activitiesArray)
            ActivitiesStore.activities = activitiesArray;
            ActivitiesStore.totalActivitiesAmount = result.data.total;
            ActivitiesStore.activitiesFetched = true;
        };
    }

    @action searchFieldHandler(value) {
        ActivitiesStore.searchField = value.trim().toLowerCase();
    }

    @action clearSearchField() {
        ActivitiesStore.searchField = '';
    }

}