import config from 'config';
import {authHeader, handleResponse} from '../_helpers';


export const categoryService = {
    add
}

function add(payload) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    };

    return fetch(`${config.apiUrl}/categories`, requestOptions)
        .then(handleResponse)
        .then(category => {
            console.log(category)
            return category;
        });
}