import http from "../api/api-client";

export const authService = {
    login: async (credentials: { email: string; password: string }) => {
        try {
            const response = http.post('/auth/login', credentials)
            return response
        } catch (error) {
            console.log(error)
        }
    },

    logout: () => {
        localStorage.removeItem("token");
    }
};