import { observable, computed } from 'mobx';

export class Activities {
    @observable activities = [];
    @observable totalActivitiesAmount = null;
    @observable activitiesFetched = false;
    @observable searchField = '';
    @observable types = [];
    @observable filterByType = 'All';

    @computed get filteredActivities() {
        return this.activities.filter((item, i) => {
            const activityItem = item.activityType.trim().toLowerCase().indexOf(this.searchField)
            console.log(item)
            if(this.filterByType === 'All') {
                return activityItem !== -1
            } else {
                return activityItem !== -1 && item.activityType === this.filterByType
            }
            // return item.activityType.trim().toLowerCase().indexOf(this.searchField) !== -1 && item.activityType === this.filterByType;
        })
    }

}