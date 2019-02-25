import { observable, computed, when } from 'mobx';

export class Activities {

    @observable activities = [];
    @observable totalActivitiesAmount = null;
    @observable activitiesFetched = false;
    @observable searchField = '';
    @observable types = [];
    @observable filterByType = 'All';
    @observable datePickerDate = [];

    @computed get filteredActivities() {
        return this.activities.filter((item, i) => {
            const activityItem = item.activityType.trim().toLowerCase().indexOf(this.searchField)
            const a = Date.parse(this.datePickerDate[0]) < Date.parse(item.createdAt.split('T')[0]) ? Date.parse(item.createdAt.split('T')[0]) : Date.parse(this.datePickerDate[0])

            if(this.filterByType === 'All') {
                return activityItem !== -1 && a < Date.parse(this.datePickerDate[1])
            } else {
                return activityItem !== -1 && item.activityType === this.filterByType && a < Date.parse(this.datePickerDate[1])
            }
        })
    }

}