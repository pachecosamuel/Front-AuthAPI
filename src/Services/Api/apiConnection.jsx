import axios from "axios";

// Essa api ja é a do servidor
export const api = axios.create({
    baseURL: 'http://localhost:8080/reservation'
})