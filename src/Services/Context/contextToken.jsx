import React, { createContext, useState } from "react";
import { LoginService } from "../Api/apiLogin";

export const AuthenticationContext = createContext({});

export const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        roles: [],
        token: ''
    });


    const login = async (email, password) => {

        const respostaServiceLogin = await LoginService(email, password);
        if (!respostaServiceLogin) {
            return false;
        } else {
            setUser({
                id: respostaServiceLogin?.id,
                name: respostaServiceLogin?.name,
                email: respostaServiceLogin?.email,
                roles: respostaServiceLogin?.roles,
                token: respostaServiceLogin?.token,

            });
            return true;
        }
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