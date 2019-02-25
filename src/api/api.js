import axios from 'axios';
const baseURL = 'http://162.243.243.47:3333';

export const URL_PATH = {
    AUTHENTICATION: '/authentication',
    ACTIVITY: '/activity',
    ACTIVITY_TYPE: '/activity-type',
    PROVIDER: '/provider',
    PROVIDER_CONTACT: '/provider-contact',
    QUESTION_WITH_OPTION: '/question-with-option',
    PRICING_REQUEST: '/pricing-request',
    USERS: '/users',
    PRICING_REQUESTS: '/pricing-request'
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
    // console.log(parameters);
    console.log(params);
    return axios(baseURL + url, params);
};