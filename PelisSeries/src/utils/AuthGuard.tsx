import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }:{children:React.ReactNode}) => {

    const { isLogged } = useContext(AuthContext)
    return(
        <>
            {!isLogged ? children : <Navigate to="/"/>}
        </>
    )
};

export default AuthGuard;