import {
    User
} from './index';

export const UserStore = new User();

export const store = {
    User: UserStore,
}

export default store;