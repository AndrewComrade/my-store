import axios from 'axios';

const host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
});

export { host, authHost };
