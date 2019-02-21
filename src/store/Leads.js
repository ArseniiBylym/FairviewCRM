import { observable, computed } from 'mobx';

export class Leads {
    @observable leads = [];
    @observable totalLeadsAmount = null;
    @observable leadsFetched = false;

}
