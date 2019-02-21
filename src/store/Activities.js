import { observable, computed } from 'mobx';

export class Activities {
    @observable activities = [];
    @observable totalActivitiesAmount = null;
    @observable activitiesFetched = false;
}
