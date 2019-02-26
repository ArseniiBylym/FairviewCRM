import { action } from 'mobx';
import { PricingRequestsStore, UserStore } from '../store/AllStores';
import moment from 'moment'
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
        const {data} = result;
        if(data) {
            PricingRequestsStore.currentRequest = data;
        }
    }

    @action setDatePickerDateField(startData, endData) {
        PricingRequestsStore.datePickerDate = [moment().format(startData._i.slice(0, 3).join('/')), moment().format(endData._i.slice(0, 3).join('/'))]
    }

    @action searchFieldHandler(value) {
        PricingRequestsStore.searchField = value.trim().toLowerCase();
    }

    @action clearSearchField() {
        PricingRequestsStore.searchField = '';
    }
}