import React, { useEffect, useState } from "react";
import styles from "./style.module.css"; 
import Input from "../Input";
import Button from "../Button";
import { FormProps } from "../../../interfaces/components/IFrom";

const Form: React.FC<FormProps> = ({ fields, customClass, btnSecondary, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isFormValid, setIsFormValid] = useState(false);

    const validateField = (value: string, pattern?: string, required?: boolean) => {
        if (required && !value.trim()) {
            return "Este campo es obligatorio.";
        }
        if (pattern && !new RegExp(pattern).test(value)) {
            return "Formato inválido.";
        }

        // setErrors({});
        return "";
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, pattern, required } = e.target as HTMLInputElement;
        const error = validateField(value, pattern, required);
        if(error){
            setErrors((prev) => ({ ...prev, [name]: error }));
        }
    
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (Object.values(errors).some((error) => error) || Object.values(formData).some((value) => !value.trim())) {
            console.log("Formulario con errores");
            return;
        }
        onSubmit(formData);
    };
    
    useEffect(() => {
        const isFormValid = 
        Object.keys(errors).length === 0 &&  
        Object.keys(formData).length === Object.keys(fields).length &&
        Object.values(formData).every((value) => value.trim());
        setIsFormValid(isFormValid);
    }, [errors,formData]);

    
    


    return (
        <form onSubmit={handleSubmit} className={`${styles.form} ${customClass ? styles[customClass] : ""}`}>
            {fields.map((field, index) => (
                <div key={index} className={styles.form_group}>
                    <label className={styles.label_form_group} htmlFor={field.id}>{field.label}</label>
                    <Input 
                        {...field}
                        onChange={handleChange}
                        value={formData[field.id] || ""}
                        className={errors[field.id] ? "error" : ""}
                    />
                    {field.template && field.template}
                    {errors[field.id] && <span className={styles.error_text}>{errors[field.id]}</span>}
                </div>
            ))}
            <div className={styles.form_btns_group}>
                {btnSecondary?.map((btn, index) => (
                    <Button 
                        key={index}
                        {...btn}
                        customClass="submit_button"
                        className="out_line"
                    >
                        {btn.children}
                    </Button>
                ))}
                <Button 
                    type="submit" 
                    customClass="submit_button"

                    disabled={!isFormValid} 
                >
                    Enviar
                </Button>
            </div>
        </form>
    );
};

export default Form;
