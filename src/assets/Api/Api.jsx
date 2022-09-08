import React from "react";
import axios from "axios";

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL // URL da APi que vai servir o react e suas rotas
});