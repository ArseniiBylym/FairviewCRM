import {
    User,
    Leads
} from './index';

export const UserStore = new User();
export const LeadsStore = new Leads();

export const store = {
    User: UserStore,
    Leads: LeadsStore,
}

export default store;