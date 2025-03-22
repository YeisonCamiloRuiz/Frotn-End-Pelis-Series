import { FieldForm } from "../interfaces/components/IFrom";
import TextRecoveryPassword from "../views/Auth/Login/components/TextRecoveryPassword";
import { useAuth } from "./useAuth";

export const useLogin = () => {
    const { error, loading, login } = useAuth();

    const formFields:FieldForm[] = [
        { 
            id: "email", 
            type: "email", 
            placeHolder: "Correo electrónico", 
            required: true,
            accesskey: "email", 
            className: "input_login",
            label: "Correo electrónico",
        },
        { 
            id: "password", 
            type: "password", 
            placeHolder: "Contraseña", 
            required: true, 
            accesskey: "password", 
            className: "input_login",
            template: <TextRecoveryPassword />,
            label: "Contraseña",
        },
    ];

    const handleSubmit = (data: Record<string, string>) => {
        const { email, password } = data;
        login(email, password);
    };

    return {
        error,
        loading,
        formFields,
        handleSubmit,
    };
};
