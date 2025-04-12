import axios from 'axios';

const api = axios.create({
    baseURL: 'https://mindcache.onrender.com', // your Express server
});

export default api;
