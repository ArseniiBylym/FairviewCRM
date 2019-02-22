import {
    User,
    Leads,
    Activities,
    Modal
} from './index';

export const UserStore = new User();
export const LeadsStore = new Leads();
export const ActivitiesStore = new Activities();
export const ModalStore = new Modal();

export const store = {
    User: UserStore,
    Leads: LeadsStore,
    Activities: ActivitiesStore,
    Modal: ModalStore,
}

export default store;