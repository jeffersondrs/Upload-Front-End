import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL // URL da APi que vai servir o react e suas rotas
});

export default api;