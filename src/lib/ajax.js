import axios from 'axios'

export default ({
    method = 'get',
    url = '',
    data = {},
    headers = {
        'Content-Type': 'application/json',
    },
    success = () => {},
    fail = (data) => { alert(data.message) }
}) => {
    const obj = {
        method,
        url,
        headers
    };

    if (['post', 'put'].includes(method)) obj.data = data;

    return axios(obj).then((res) => {
        const { data } = res;
        success(data);
    }).catch((err) => {
        const { data } = err.response
        fail(data);
    });
}