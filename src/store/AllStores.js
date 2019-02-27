import {
    User,
    Leads,
    Activities,
    Modal,
    PricingRequests,
    CustomerTabs
} from './index';

export const UserStore = new User();
export const LeadsStore = new Leads();
export const ActivitiesStore = new Activities();
export const PricingRequestsStore = new PricingRequests();
export const ModalStore = new Modal();
export const CustomerTabsStore = new CustomerTabs();


export const store = {
    User: UserStore,
    Leads: LeadsStore,
    Activities: ActivitiesStore,
    Modal: ModalStore,
    PricingRequests: PricingRequestsStore,
    CustomerTabs: CustomerTabsStore,
}

export default store;