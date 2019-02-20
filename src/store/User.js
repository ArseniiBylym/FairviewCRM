import { observable, computed } from 'mobx';

export class User {
    @observable username = 'user';
    @observable password = '';
    @observable isLoged = false;
}
