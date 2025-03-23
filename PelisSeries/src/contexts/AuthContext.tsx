import React, { createContext, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

interface AuthContextType {
    isLogged: boolean;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}


const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }:{children:React.ReactNode}) => {

    const [isLogged, setIsLogged] = useState<boolean>(false);
    const { getToken,token } = useAuth();

    useEffect(() => {
        const storagedToken = getToken();

        if (storagedToken) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, [isLogged,token]);
    

    return (
        <AuthContext.Provider value={{
            isLogged,
            setIsLogged
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider };

