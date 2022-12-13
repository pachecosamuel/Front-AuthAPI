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

        if (!!resposta.data.token) {

            tokenDecodificado = jwt_decode(resposta.data.token);
            tokenDecodificado['token'] = resposta.data.token;
            api.defaults.headers["Authorization"] = `Bearer ${resposta.data.token}`;

            return tokenDecodificado;

        } else {

            if (!resposta.data.isSuccess) {
                toast.error('Erro ao realizar o login - ' + resposta.data.message);
                delete api.defaults.headers["Authorization"];
            } else {
                toast.error('Erro ao realizar o login');
                delete api.defaults.headers["Authorization"];
            }

        }

    } catch (error) {

        if (error.message === 'Network Error') {
            toast.error('Erro ao realizar o login - Erro de conexão, o servidor pode estar fora do ar.');
        } else {
            toast.error('Erro ao realizar o login');
        }
        
    }
}

export { LoginService };