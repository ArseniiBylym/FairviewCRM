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

    @reaction(() => ActivitiesStore.searchField,
        (value) => {
            console.log(value)
        }
    )

    @action searchFieldHandler(value) {
        ActivitiesStore.searchField = value

        const filteredArr = ActivitiesStore.activities.filter(item => {
            ActivitiesStore.searchField = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
            return item.activityType.search(ActivitiesStore.searchField) === 0
            // return item.activityType.toLowerCase().indexOf(editedStr) !== -1
        })
        
        if(filteredArr && ActivitiesStore.searchField) {
            ActivitiesStore.filteredActivitiesBySearch = filteredArr
        } else if (!filteredArr && ActivitiesStore.searchField) {
            ActivitiesStore.filteredActivitiesBySearch = []
        }
    }

    // @action filterActivitiesBySearch(inputText) {
    //     if(!inputText) {
    //         ActivitiesStore.filteredActivitiesBySearch = []
    //         return
    //     }

    //     // const filteredArr = ActivitiesStore.activities.filter(item => {
    //     //     // const editedInputText = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase()
    //     //     return item.activityType.search(ActivitiesStore.searchField) === 0
    //     // })

      
    //     console.log(ActivitiesStore)
    // }

}