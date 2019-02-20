import { action } from 'mobx';
import { UsersStore, UserStore } from '../store/AllStores';

export class UserActionsClass {
    @action login() {
        console.log('You are loged in')
        UserStore.isLoged = true;
    }
    @action logout() {
        console.log('You are loged out')
        UserStore.isLoged = false;
    }
}