import { useState } from "react";

export const useRegister = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateStep = (fields: Record<string, string>) => {
        const newErrors: Record<string, string> = {};
        
        Object.keys(fields).forEach((key) => {
            if (!fields[key].trim()) {
                newErrors[key] = "Este campo es obligatorio";
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = (data: Record<string, string>) => {
        if (!validateStep(data)) return;
        
        setFormData((prev) => ({ ...prev, ...data }));
        setErrors({}); // Limpia errores al avanzar
        setStep(2);
    };

    const prevStep = () => {
        setStep(1);
        setErrors({}); // Limpia errores al retroceder
    };

    const handleSubmit = async (data: Record<string, string>) => {
        if (!validateStep(data)) return;

        setFormData((prev) => ({ ...prev, ...data }));
        console.log("Formulario enviado:", { ...formData, ...data });
    };

    return { step, formData, errors, nextStep, prevStep, handleSubmit };
};
