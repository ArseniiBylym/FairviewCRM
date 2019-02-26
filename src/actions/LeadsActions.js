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

        if(result.data) {
            LeadsStore.leads = result.data.data;
            LeadsStore.totalLeadsAmount = result.data.total;
            LeadsStore.leadsFetched = true;
        };
    }

    @action addToActiveTabs(leadId, leadName) {
        
        const isAlreadyAdded = LeadsStore.activeLeads.find((item, i) => {
            return item.id === leadId;
       })
       if (!isAlreadyAdded) LeadsStore.activeLeads.push({id: leadId, title: leadName});
       else return;
    }

    @action removeFromActiveTabs(id) {
        const filteredLeads =  LeadsStore.activeLeads.filter((item, i) => {
            return item.id !== id
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
        const {data} = result;
        if(data) {
            LeadsStore.currentLead = data;
        }

    } 

    @action async createNewContact(data) {

        const body = JSON.stringify({
            ...data,
            providerId: LeadsStore.currentLead.providerId
        })
        const token = UserStore.accessToken
        const result = await fetchFromApi(URL_PATH.PROVIDER_CONTACT, {
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json" 
            },
            data: body
        })
        console.log(result);
    }

    @action searchFieldHandler(value) {
        LeadsStore.searchField = value.trim().toLowerCase();
    }

    @action clearSearchField() {
        LeadsStore.searchField = '';
    }

}