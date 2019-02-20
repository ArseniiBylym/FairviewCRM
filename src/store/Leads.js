import { observable, computed } from 'mobx';

export class Leads {
    @observable leads = [];
    @observable totalLeadsAmmount = null;
    @observable leadsFetched = false;

}
