import {
    User,
    Leads,
    Activities
} from './index';

export const UserStore = new User();
export const LeadsStore = new Leads();
export const ActivitiesStore = new Activities();

export const store = {
    User: UserStore,
    Leads: LeadsStore,
    Activities: ActivitiesStore
}

export default store;