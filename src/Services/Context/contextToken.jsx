import React, { createContext, useState } from "react";
import { LoginService } from "../Api/apiLogin";

export const AuthenticationContext = createContext({});

export const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState({
        Id: '',
        Email: '',
        Role: '',
        token: ''
    });
    const login = async (email, password) => {

        const respostaServiceLogin = await LoginService(email, password);
        if (!respostaServiceLogin) {
            return false;
        } else {
            console.log('====================================');
            console.log(respostaServiceLogin);
            console.log('====================================');
            setUser({
                Id: respostaServiceLogin?.Id,
                Email: respostaServiceLogin?.Email,
                Role: respostaServiceLogin?.Role,
                token: respostaServiceLogin?.token

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