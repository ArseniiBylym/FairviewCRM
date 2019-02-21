import { action } from 'mobx';
import { LeadsStore, UserStore } from '../store/AllStores';
import { fetchFromApi, URL_PATH } from '../api/api'

export class LeadsActionsClass {
    @action async fetchLeads() {

        const token = UserStore.accessToken
        const result = await fetchFromApi(URL_PATH.PROVIDER, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" 
            },
        })

        if(result.data.data) {
            const leadsArray = result.data.data.map((item, i) => {
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
            LeadsStore.leads = leadsArray;
            LeadsStore.totalLeadsAmmount = result.data.total;
            LeadsStore.leadsFetched = true;
        };
    }

    @action addToActiveTabs(lead) {
        const isAlreadyAdded = LeadsStore.activeLeads.find((item, i) => {
             return item.databaseId === lead.databaseId;
        })
        if (!isAlreadyAdded) LeadsStore.activeLeads.push(lead);
        else return;
    }

    @action removeFromActiveTabs(id) {
        const filteredLeads =  LeadsStore.activeLeads.filter((item, i) => {
            return item.databaseId !== id
        });
        LeadsStore.activeLeads = filteredLeads;
    }

    @action async setCurrentLead(databaseId) {
        // const currentLead = LeadsStore.activeLeads.find((item, i) => item.databaseId === databaseId)
        // LeadsStore.currentLead = currentLead;

        const token = UserStore.accessToken;
        const result = await fetchFromApi(URL_PATH.PROVIDER + `/${databaseId}`, {
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" 
            },
        })
        console.log(result.data);
        const {data} = result;
        if(data) {
            LeadsStore.currentLead = data;
        }

    } 

}