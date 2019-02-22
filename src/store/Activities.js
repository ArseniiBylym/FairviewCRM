import { observable, computed, reaction } from 'mobx';

export class Activities {
    @observable activities = [];
    @observable filteredActivitiesBySearch = []
    @observable totalActivitiesAmount = null;
    @observable activitiesFetched = false;
    @observable searchField = '';

    @computed get filteredActivities() {
        if (!this.searchField) {
            return this.activities;
        } else {
            return this.activities.filter((item, i) => {
                return item.activityType.trim().toLowerCase().indexOf(this.searchField) !== -1;
            })
        }
    }

}
