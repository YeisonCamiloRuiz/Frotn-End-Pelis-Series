import http from "../api/api-client";
import { UserRegister } from "../hooks/useAuth";

export const authService = {
    login: async (credentials: { email: string; password: string }) => {
        try {
            const response = http.post('/auth/login', credentials)
            return response
        } catch (error) {
            console.log(error)
        }
    },

    register: async (data: UserRegister) => {
        try {
            const response = http.post('/auth/register', data)
            return response
        } catch (error) {
            console.log(error)
        }
    },

    logout: () => {
        localStorage.removeItem("token");
    }
};