import {
    User,
    Leads,
    Activities,
    Modal,
    PricingRequests
} from './index';

export const UserStore = new User();
export const LeadsStore = new Leads();
export const ActivitiesStore = new Activities();
export const PricingRequestsStore = new PricingRequests();
export const ModalStore = new Modal();


export const store = {
    User: UserStore,
    Leads: LeadsStore,
    Activities: ActivitiesStore,
    Modal: ModalStore,
    PricingRequests: PricingRequestsStore
}

export default store;