import { observable, computed, reaction } from 'mobx';

export class Activities {
    @observable activities = [];
    @observable filteredActivitiesBySearch = []
    @observable totalActivitiesAmount = null;
    @observable activitiesFetched = false;
    @observable searchField = '';

   
    // @reaction(() => this.searchField,
    //     (value) => {
    //         console.log(value)
    //     }
    // )
}
