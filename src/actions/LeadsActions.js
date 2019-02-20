import { action } from 'mobx';
import { LeadsStore, UserStore } from '../store/AllStores';
import { fetchFromApi, URL_PATH } from '../api/api'

export class LeadsActionsClass {
    @action async fetchLeads() {
        console.log('hello')

        const token = UserStore.accessToken
        const result = await fetchFromApi(URL_PATH.PROVIDER, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" 
            },
        })

        console.log(result);
        if(result.data.data) {
            const leadsArray = result.data.data.map((item, i) => {
                // console.log(item);
                return {
                    databaseId: item.databaseId,
                    providerId: item.providerId,
                    legalBusName: item.legalBusName,
                    dba: item.dba,
                    plCity: item.plCity,
                    plState: item.plState,
                    plZipcode: item.plZipcode,
                    plPhone: item.plPhone
                }
            })
            console.log(leadsArray)
            LeadsStore.leads = leadsArray;
            LeadsStore.totalLeadsAmmount = result.data.total;
            LeadsStore.leadsFetched = true;
        };
    }

}