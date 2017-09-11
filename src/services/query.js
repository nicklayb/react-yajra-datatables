import axios from 'axios';
import qs from 'qs';

const query = ({ url, method = 'get', data }) => {
    return axios.request({
        url: url,
        method: method.toUpperCase(),
        data: data,
        params: data,
        paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'indices' })
    });
};

export default query;
