import axios from 'axios';
//import { AsyncStorage } from 'react-native';
import storage from './storage';

const api = axios.create({
    baseURL: 'https://myshelf-chmr1.herokuapp.com',
});

api.interceptors.request.use(async (config) => {
    try {
        const token = await AsyncStorage.getItem('@AirBnbApp:token');
        //const token = storage.get('@AirBnbApp:token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    } catch (err) {
        alert(err);
    }
});

export default api;