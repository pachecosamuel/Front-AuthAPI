import jwtDecode from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { LoginService } from "../Api/apiLogin";

export const AuthenticationContext = createContext({});

export const AuthenticationProvider = ({ children }) => {

    const [user, setUser] = useState({
        fullName: "",
        personalEmail: "",
        corporativeEmail:"",
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
            handleSetUser(localStorage.getItem('token')); 
        }
        
    }, [])

    const handleSetUser = (tokenLocal) => {
        var tokenDecoded = jwtDecode(tokenLocal);
        setUser({
            ...user,
            fullName: tokenDecoded?.FullName,
            personalEmail: tokenDecoded?.PersonalEmail,
            corporativeEmail:tokenDecoded?.CorporativeEmail,
            phone: tokenDecoded?.Phone,
            cpf: tokenDecoded?.Cpf,
            role: tokenDecoded?.Role,
            birthDate: tokenDecoded?.BirthDate,
            admissionDate: tokenDecoded?.AdmissionDate,
            });
    }


    const login = async (email, password) => {

        const respostaServiceLogin = await LoginService(email, password);
        if (!respostaServiceLogin) return false;

        setUser({
            fullName: respostaServiceLogin?.fullName,
            personalEmail: respostaServiceLogin?.personalEmail,
            corporativeEmail:respostaServiceLogin?.CorporativeEmail,
            phone: respostaServiceLogin?.phone,
            cpf: respostaServiceLogin?.cpf,
            role: respostaServiceLogin?.role,
            birthDate: respostaServiceLogin?.birthDate,
            admissionDate: respostaServiceLogin?.admissionDate,
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