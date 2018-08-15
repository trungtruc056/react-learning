import axios from 'axios';

const apiEndPoint = 'https://jsonplaceholder.typicode.com';

const PostAPI = {
    get: (id) => axios.get(`${apiEndPoint}/posts/${id}`),
    getLimit: () => axios.get(`${apiEndPoint}/posts/?_limit=6`),
    getAll: () => axios.get(`${apiEndPoint}/posts`),
    getWithUser: (id) => axios.get(`${apiEndPoint}/posts/?userId=${id}`)
}

export default PostAPI;
