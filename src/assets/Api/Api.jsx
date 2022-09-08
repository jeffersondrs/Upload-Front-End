import React from "react";
import axios from "axios";

export default axios.create({
    baseURL: `http://127.0.0.1:4500/nodeapp/`  // URL da APi que vai servir o react e suas rotas
});