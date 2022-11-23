import axios from "axios";

// Essa api ja é a do servidor
export const api = axios.create({
    baseURL: 'https://localhost:7191/api/'
})