import { action } from 'mobx';
import { UsersStore } from '../store/AllStores';

export class UserActionClass {
    @action loginUser() {
        console.log('hello')
    }
}