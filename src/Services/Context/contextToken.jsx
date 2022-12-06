import jwtDecode from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../Api/apiConnection";
import { LoginService } from "../Api/apiLogin";

export const AuthenticationContext = createContext({});

export const AuthenticationProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: "",
        fullName: "",
        personalEmail: "",
        corporativeEmail: "",
        phone: "",
        cpf: "",
        role: 0,
        birthDate: "",
        admissionDate: "",
        token: ""
    });
    const [token, setToken] = useState('');
    const [auth, setAuth] = useState(false);


    useEffect(() => {
        if (localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
        }

    }, [])


    const login = async (email, password) => {

        const respostaServiceLogin = await LoginService(email, password);
        if (!respostaServiceLogin) return false;
        setUser({
            id: respostaServiceLogin?.Id,
            fullName: respostaServiceLogin?.FullName,
            personalEmail: respostaServiceLogin?.PersonalEmail,
            corporativeEmail: respostaServiceLogin?.CorporativeEmail,
            phone: respostaServiceLogin?.Phone,
            cpf: respostaServiceLogin?.Cpf,
            role: respostaServiceLogin?.Role,
            birthDate: respostaServiceLogin?.BirthDate,
            admissionDate: respostaServiceLogin?.AdmissionDate,
            token: respostaServiceLogin?.token
        });
        localStorage.setItem('user', JSON.stringify({
            id: respostaServiceLogin?.Id,
            fullName: respostaServiceLogin?.FullName,
            personalEmail: respostaServiceLogin?.PersonalEmail,
            corporativeEmail: respostaServiceLogin?.CorporativeEmail,
            phone: respostaServiceLogin?.Phone,
            cpf: respostaServiceLogin?.Cpf,
            role: respostaServiceLogin?.Role,
            birthDate: respostaServiceLogin?.BirthDate,
            admissionDate: respostaServiceLogin?.AdmissionDate,
            token: respostaServiceLogin?.token
        }));
        setToken(respostaServiceLogin?.token)
        localStorage.setItem('token', respostaServiceLogin?.token);

        return true;
    };




    const logOut = () => {
        setToken('');
        setAuth(false);
        localStorage.clear();
    }

    const isAuthenticated = async () => {
        var tokenLocal = localStorage.getItem('token');
        if (tokenLocal) {
            var tokenDecoded = jwtDecode(tokenLocal);

            try {
                api.defaults.headers["Authorization"] = `Bearer ${tokenLocal}`;
                // TODO Alterar para requisição de validação do token
                await api.get(`User/${tokenDecoded.Id}`);
                setAuth(true);
            } catch (error) {
                logOut()
                if (error.message === 'Network Error') {
                    toast.error('Erro ao realizar o login - Erro de conexão, o servidor pode estar fora do ar.');
                } else {
                    toast.error("Erro de autenticação.")
                }
                console.log(error)
            }
        }
    }

    return (
        <AuthenticationContext.Provider value={{
            login,
            logOut,
            user,
            isAuthenticated,
            auth,
            token
        }}>
            {children}
        </AuthenticationContext.Provider>
    )
}