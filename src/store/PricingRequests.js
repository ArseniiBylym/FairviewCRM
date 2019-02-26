import { observable, computed } from 'mobx';


export class PricingRequests {
    @observable requests = [];
    @observable totalRequestsAmount = null;
    @observable requestsFetched = false;
    @observable requestName = '';
    @observable searchField = '';
    @observable currentRequest = null;
    @observable datePickerDate = ["1/1/2016", "1/1/2020"];

    @computed get filteredRequests() {
        return this.requests.filter((item, i) => {
            const requestItem = item.createdByUser.name.trim().toLowerCase().indexOf(this.searchField)
            const a = Date.parse(this.datePickerDate[0]) < Date.parse(item.createdAt.split('T')[0]) ? Date.parse(item.createdAt.split('T')[0]) : Date.parse(this.datePickerDate[0])

            return requestItem !== -1 && a < Date.parse(this.datePickerDate[1])
            
        })
    }
}