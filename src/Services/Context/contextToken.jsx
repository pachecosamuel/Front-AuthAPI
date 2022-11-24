import React, { createContext, useState } from "react";
import { LoginService } from "../Api/apiLogin";

export const AuthenticationContext = createContext({});

export const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: '',
        email: '',
        role: '',
        token: ''
    });

    const login = async (email, password) => {

        const respostaServiceLogin = await LoginService(email, password);
        if (!respostaServiceLogin) return false;

        setUser({
            id: respostaServiceLogin?.Id,
            email: respostaServiceLogin?.Email,
            role: respostaServiceLogin?.Role,
            token: respostaServiceLogin?.token
        });
        return true;
    };

    return (
        <AuthenticationContext.Provider value={{
            login,
            user
        }}>
            {children}
        </AuthenticationContext.Provider>
    )
}