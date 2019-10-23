/**
 * Copyright (c) 2018-2019,  Charlie Feng. All Rights Reserved.
 */

import axios from 'axios';
import { USER_URL } from './config';

const signup = jsonBody => {
    return axios.post(`${USER_URL}/signup`, jsonBody);
};
export { signup };
