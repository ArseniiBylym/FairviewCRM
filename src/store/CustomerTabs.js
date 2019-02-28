import { observable, computed } from 'mobx';

export class CustomerTabs {
    @observable activities = [];
    @observable totalActivitiesLength = null;
    @observable activitiesFetched = false;
    @computed get allActivities() {
        return this.activities;
    }

    @observable pricingRequests = [];
    @observable totalPRLength = null;
    @observable pricingRequestsFetched = false;
    @computed get allPricingRequests() {
        return this.pricingRequests;
    }
}