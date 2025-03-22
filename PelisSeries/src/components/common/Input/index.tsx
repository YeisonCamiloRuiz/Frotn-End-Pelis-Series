import styles from "../Input/styles.module.css";

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

interface Option {
    label: string;
    value: string;
}

const Input = ({
    accesskey,
    value,
    placeHolder,
    type,
    options,
    id,
    disabled,
    readonly,
    pattern,
    className,
    onChange,
    onFocus,
    onBlur,
}: InputProps) => {
    
    const RenderInput = (typeInput:string) => {
        switch (typeInput) {
            case "text":
            case "number":  
            case "email":
            case "password":
                return (
                    <input 
                        name={id}
                        id={id}
                        type={type} 
                        accessKey={accesskey} 
                        placeholder={placeHolder} 
                        onFocus={onFocus} 
                        onBlur={onBlur} 
                        onChange={onChange}
                        pattern={pattern}
                        value={value}
                        className={className ? styles[className] + " " + styles.input_default : styles.input_default}
                        readOnly={readonly}
                        disabled={disabled}
                        
                    />
                )
            case "select":
                return(
                    <select name={accesskey} onChange={onChange} className={className ? styles[className] + styles.input_dafault : styles.input_dafault} accessKey={accesskey} value={value} >
                        {options?.map((option, index)=>(
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )
        
            default:
                break;
        }
    }

    return (
        RenderInput(type)  
    );
};

export default Input;
