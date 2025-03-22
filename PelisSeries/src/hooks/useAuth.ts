import { useState } from "react";
import { authService } from "../services/auth-serive";

export const useAuth = () => {
    const [user, setUser] = useState<{ email: string;password: string}>({email:"", password:""});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            const data = await authService.login({ email, password });
            setUser(data?.data);
            console.log(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : String(err));
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        authService.logout();
        setUser({ email: "", password: "" });
    };

    return { user, loading, error, login, logout };
};
