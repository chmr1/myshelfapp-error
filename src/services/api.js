import axios from 'axios';

const api = axios.create({
    baseURL: 'https://airbnbapi-chmr1.herokuapp.com',
});

export default api;