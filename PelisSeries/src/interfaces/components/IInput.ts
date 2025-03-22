export interface InputProps {
    accesskey: string;
    value?: string;
    placeHolder: string;
    type: "text" | "number" | "email" | "password" | "select" | "radio" | "checkBox";
    options?: Option[];
    id: string;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    pattern?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    autoFocus?: boolean;
}

export interface Option {
    label: string;
    value: string;
}
