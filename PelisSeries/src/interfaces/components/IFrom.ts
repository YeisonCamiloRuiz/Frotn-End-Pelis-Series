import { ButtonProps } from "./IButtons";
import { InputProps } from "./IInput";

export interface FieldForm extends InputProps {
    template?: React.ReactNode;
    label:string;
}

export interface FormProps {
    fields: FieldForm[];
    customClass?:string;
    btnSecondary?:ButtonProps[];
    onSubmit: (data: Record<string, string>) => void;
}