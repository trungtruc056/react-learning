import axios from 'axios';

const apiEndPoint = 'https://jsonplaceholder.typicode.com';

const UserAPI = {
    get: (id) => axios.get(`${apiEndPoint}/users/${id}`),
    getLimit: (num) => axios.get(`${apiEndPoint}/users/?_limit=${num}`),
    getAll: () => axios.get(`${apiEndPoint}/users`),
}

export default UserAPI;