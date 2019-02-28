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
        if(result.data) {
            CustomerTabsStore.activities = result.data.data
            CustomerTabsStore.totalActivitiesLength = result.data.total
            CustomerTabsStore.activitiesFetched = true;
        }
    }

    @action async fetchCustomerPricingRequests(customerId) {
        const token = UserStore.accessToken
        const result = await fetchFromApi(URL_PATH.PRICING_REQUEST + `?provider_id=${customerId}`, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" 
            },
        })
        if(result.data) {
            CustomerTabsStore.pricingRequests = result.data.data
            CustomerTabsStore.totalPRLength = result.data.total
            CustomerTabsStore.pricingRequestsFetched = true;
        }
    }

}

