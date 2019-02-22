import { observable, computed } from 'mobx';

export class Activities {
    @observable activities = [];
    @observable totalActivitiesAmount = null;
    @observable activitiesFetched = false;
    @observable searchField = '';

    @computed get filteredActivities() {
        return this.activities.filter((item, i) => {
            return item.activityType.trim().toLowerCase().indexOf(this.searchField) !== -1;
        })
    }

}
