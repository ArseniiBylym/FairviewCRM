import { observable, computed } from 'mobx';

export class CustomerTabs {
    @observable activities = [];
    @observable totalLength = null;

    @computed get allActivities() {
        return this.activities
    }
}