import axios from 'axios';

const axiosConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 15000
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
        console.log('err ->', err);
    }
);

/* class Request {
    async get(url) {
        return instance.get(url).then((res) => res.data);
    }

    async post(url, body) {
        return instance.post(url, body);
    }

    async update(url, body) {
        return instance.patch(url, body);
    }

    async delete(url) {
        return instance.delete(url);
    }
} */

// const httpReq = new Request();

export default axiosInstance;
