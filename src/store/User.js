import { observable, computed } from 'mobx';

export class User {
    @observable id = null
    @observable username = ''
    @observable name = ''
    @observable email = null
    @observable type = null
    @observable slpcode = null
    @observable status = null

    @observable accessToken = null

    @observable isLoged = false;
    // @observable isLoged = true;
}
