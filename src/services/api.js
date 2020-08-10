import axios from 'axios';

const api = axios.create({
    // baseURL: "http://localhost:4450",
    baseURL: 'https://tradersclub-teste-backend.herokuapp.com',
});

export default api;
