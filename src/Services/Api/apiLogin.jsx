import React from "react";
import { api } from "./apiConnection";
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

const LoginService = async (email, password) => {
    var tokenDecodificado = null;
    try {
        const resposta = await api.post("login", {
            email,
            password
        });
        if (resposta.status === 200) {
            tokenDecodificado = jwt_decode(resposta.data.token);
            tokenDecodificado['token'] = resposta.data.token;
            api.defaults.headers["Authorization"] = `Bearer ${resposta.data.token}`;
            return tokenDecodificado;
        } else {
            return false;
        }
    }
    catch (error) {
        console.log(error);
        toast.error('Erro ao realizar o login - ' + error.response.data.message);
        delete api.defaults.headers["Authorization"];
    }

}
export { LoginService };