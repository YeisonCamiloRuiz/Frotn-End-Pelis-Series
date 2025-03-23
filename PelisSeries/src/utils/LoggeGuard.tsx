import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const LoggedGuard = ({ children }:{children:React.ReactNode}) => {
    
    const { isLogged } = useContext(AuthContext);
    return (
        isLogged ? children : <Navigate to="/login" />
    )
};

export default LoggedGuard;