import axios from "axios";


const api = axios.create({
    baseURL: 'http://127.0.0.1:4500'
     // URL da APi que vai servir o react e suas rotas
});

export default api;