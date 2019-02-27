import { action } from 'mobx';
import { CustomerTabsStore, UserStore } from '../store/AllStores';
import { fetchFromApi, URL_PATH } from '../api/api'

export class CustomerTabsActionsClass {

    @action async fetchCustomerActivities(customerId) {
        const token = UserStore.accessToken
        const result = await fetchFromApi(URL_PATH.ACTIVITY + `?provider_id=${customerId}`, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" 
            },
        })
        console.log(result);
        if(result.data) {
            CustomerTabsStore.activities = result.data.data
            CustomerTabsStore.totalLength = result.data.total
        }
    }

}

