import { observable, computed } from 'mobx';


export class PricingRequests {
    @observable requests = [];
    @observable totalRequestsAmount = null;
    @observable requestsFetched = false;

    @observable currentRequest = null;
}