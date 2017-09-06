import axios from 'axios';
import qs from 'qs';

const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const PATCH = 'PATCH';
const DELETE = 'DELETE';
const METHODS = [GET, POST, PUT, PATCH, DELETE];

const query = (url = '') => {
    const fetch = (method = 'get', data) => {
        return axios.request({
            url: url,
            method: method.toUpperCase(),
            data: data,
            params: data,
            paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'indices' })
        });
    };

    const methods = {};
    METHODS.forEach(method => {
        methods[method.toLowerCase()] = (data) => fetch(method, data);
    });
    return methods;
};

export default query;
