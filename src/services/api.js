import axios from 'axios';
import qs from 'qs';

const URL_SPLITTER = '/';
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const PATCH = 'PATCH';
const DELETE = 'DELETE';
const METHODS = [GET, POST, PUT, PATCH, DELETE];

const getUrl = (path = []) => {
    path = (path.constructor !== Array) ? [path.split(URL_SPLITTER)] : path;
    path = path.filter(part => part != null);
    return (['']).concat(path).join(URL_SPLITTER);
};

const getData = data => (Object.assign({
    _token: window.ARM._token
}, data));

const query = (url = '') => {
    const fetch = (method = 'get', data) => {
        return axios.request({
            url: getUrl(url),
            method: method.toUpperCase(),
            data: getData(data),
            params: data,
            paramsSerializer: function(params) {
                return qs.stringify(params, {arrayFormat: 'indices'});
            },
        });
    };

    const methods = {};
    METHODS.forEach(method => {
        methods[method.toLowerCase()] = (data) => fetch(method, data);
    });
    return methods;
};

export default query;
