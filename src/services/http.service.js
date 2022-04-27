import axios from 'axios';

const axiosConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 15000
};

const instance = axios.create(axiosConfig);

export default instance;
