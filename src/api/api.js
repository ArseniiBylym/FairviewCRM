import axios from 'axios';
const baseURL = 'http://162.243.243.47:3333';

export const URL_PATH = {
    AUTHENTICATION: '/authentication',
    ACTIVITY: '/activity',
    ACTIVITY_TYPE: '/activity-type',
    PROVIDER: '/provider',
    CUSTOMER_GROUP: '/customer-group',
    PROVIDER_CONTACT: '/provider-contact',
    QUESTION_WITH_OPTION: '/question-with-option',
    PRICING_REQUEST: '/pricing-request',
    USERS: '/users',
    PRICING_REQUESTS: '/pricing-request',
    COMMENTS: '/comment', 
};

const defaultParameters = {
    method: 'get',
    headers: {
        "Content-Type": "application/json" 
    }
}

export const fetchFromApi = async(url, params) => {
    // const parameters = {
    //     ...defaultParameters,
    //     ...params
    // }
    return axios(baseURL + url, params);
};