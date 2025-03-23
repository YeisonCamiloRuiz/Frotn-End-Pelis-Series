import { useContext, useState } from "react";
import { authService } from "../services/auth-serive";
import { AuthContext } from "../contexts/AuthContext";

export interface UserRegister{
    name: string;
    phone: string;
    email: string;
    password: string;
}

export const useAuth = () => {
    const { setIsLogged } = useContext(AuthContext);
    const [user, setUser] = useState<{ email: string;password: string}>({email:"", password:""});
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            const data = await authService.login({ email, password });
            localStorage.setItem("token", data?.data.token);
            setIsLogged(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
        } finally {
            setLoading(false);
        }
    };

    const register = async ( user:UserRegister) => {
        setLoading(true);
        try {
            const data = await authService.register(user);
            setToken(data?.data.token);
        } catch (error) {
            console.log(error)
        }
    }

    const getToken = () => {
        return token;
    }

    const logout = () => {
        authService.logout();
        setIsLogged(false);
        localStorage.removeItem("token");
        setUser({ email: "", password: "" });
    };

    return { user, loading, error, login, logout,register,getToken,token };
};
