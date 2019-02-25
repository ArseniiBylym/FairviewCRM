import { action } from 'mobx';
import { PricingRequestsStore, UserStore } from '../store/AllStores';
import { fetchFromApi, URL_PATH } from '../api/api'

export class PricingRequestsActionsClass {
    @action async fetchRequests() {

        const token = UserStore.accessToken
        const result = await fetchFromApi(URL_PATH.PRICING_REQUESTS, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" 
            },
        })
        console.log(result);

        if(result.data) {

            const fetchedData = result.data;
            PricingRequestsStore.requests = fetchedData.data;
            PricingRequestsStore.totalRequestsAmount = fetchedData.total;
            PricingRequestsStore.requestsFetched = true;
        }
    }

    @action async setCurrentPricingRequest(requestId) {

        const token = UserStore.accessToken;
        const result = await fetchFromApi(URL_PATH.PRICING_REQUESTS + `/${requestId}`, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" 
            },
        })
        console.log(result.data);
        const {data} = result;
        if(data) {
            PricingRequestsStore.currentRequest = data;
        }
    }
}