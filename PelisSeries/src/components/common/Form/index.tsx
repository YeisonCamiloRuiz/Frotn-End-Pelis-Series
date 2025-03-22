import React, { useState } from "react";

import styles from "./style.module.css"; 
import Input, { InputProps } from "../Input";
import Button from "../Button";

export interface FieldForm extends InputProps {
    template?: React.ReactNode;
}

interface FormProps {
    fields: FieldForm[];
    customClass?:string;
    onSubmit: (data: Record<string, string>) => void;
}

const Form: React.FC<FormProps> = ({ fields, customClass, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form + " " + styles[customClass ? customClass :""]}>
            {fields.map((field, index) => (
                <>
                    <Input 
                        key={index}
                        {...field}
                        onChange={handleChange}
                    />
                    {field.template && field.template}
                </>
            ))}
            <Button 
                type="submit" 
                customClass="submit_button"
            >
                Enviar
            </Button>
        </form>
    );
};

export default Form;
