import { useState } from "react";
import { useAuth } from "./useAuth";

export const useRegister = () => {
    const [step, setStep] = useState(1);
    const [errors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState<{
        name: string;
        phone: string;
        email: string;
        password: string;
        confirmPassword?: string;
    }>({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const { register } = useAuth();

    const nextStep = (data: Record<string, string>) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setStep(2);
    };

    const prevStep = () => {
        setStep(1);
    };

    const handleSubmit = async (data: Record<string, string>) => {
        setFormData((prev) => ({ ...prev, ...data }));
        const formData1 = { ...formData, ...data };
        delete formData1.confirmPassword;
        await register(formData1);
    };

    return { step, formData, errors, nextStep, prevStep, handleSubmit };
};
