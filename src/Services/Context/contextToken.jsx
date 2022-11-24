import jwtDecode from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { LoginService } from "../Api/apiLogin";

export const AuthenticationContext = createContext({});

export const AuthenticationProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: '',
        email: '',
        role: '',
        token: ''
    });
    const [token, setToken] = useState('');
    const [auth, setAuth] = useState(false);


    useEffect(() => {
        if (localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
        }

    }, [])


    const login = async (email, password) => {

        const respostaServiceLogin = await LoginService(email, password);
        if (!respostaServiceLogin) return false;

        setUser({
            id: respostaServiceLogin?.Id,
            email: respostaServiceLogin?.Email,
            role: respostaServiceLogin?.Role,
            token: respostaServiceLogin?.token
        });
        setToken(respostaServiceLogin?.token)
        localStorage.setItem('token', respostaServiceLogin?.token);

        return true;
    };

    const logOut = () => {
        setToken('');
        setAuth(false);
        localStorage.clear();
    }

    const isAuthenticated = () => {
        var tokenLocal = localStorage.getItem('token');
        if (tokenLocal) {
            var tokenDecoded = jwtDecode(tokenLocal);
            var expDate = new Date(tokenDecoded.exp * 1000);
            console.log(expDate);
            if (Date.now() < expDate) {
                setAuth(true);
            } else {
                setAuth(false);
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