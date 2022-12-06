import axios from "axios";
import config from "../../config";


// Essa api ja é a do servidor
export const api = axios.create({
    baseURL: `${config.baseURL}`
})

export const viaCep = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})