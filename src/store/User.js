import { observable, computed } from 'mobx';

export class User {
    @observable username = '';
    @observable password = '';
    @observable isLoged = false;
}
