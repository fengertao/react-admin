/**
 * Copyright (c) 2018-2019,  Charlie Feng. All Rights Reserved.
 */

import axios from 'axios';
import { USER_URL } from './config';

const signup = jsonBody => {
    return axios.post(`${USER_URL}/signup`, jsonBody);
};

const getAll = () => {
    return axios.get(`${USER_URL}/all`);
};

const enable = (username) => {
    return axios.post(`${USER_URL}/enable`, {username});
}

const disable = (username) => {
    return axios.post(`${USER_URL}/disable`, {username});
}

export { signup, getAll, enable, disable };
