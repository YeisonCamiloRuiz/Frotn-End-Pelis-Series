
import Form, { FieldForm } from "../../../components/common/Form";
import { useAuth } from "../../../hooks/useAuth";
import TextRecoveryPassword from "./components/TextRecoveryPassword";
import style from "./styles.module.css"

const Login = () => {

    const { error,loading,login,user} = useAuth();

    const formFields: FieldForm[] = [
        { 
            id: "email", 
            type: "email", 
            placeHolder: "Correo electrónico", 
            required: true,
            accesskey: "email", 
            className: "input_login" ,
        },
        { 
            id: "password", 
            type: "password", 
            placeHolder: "Contraseña", 
            required: true, 
            accesskey: "password", 
            className: "input_login" ,
            template:<TextRecoveryPassword/>
        },
    ];

    const handleSubmit = (data: Record<string, string>) => {
        const {email, password} = data;
        login(email,password)
    };

    const isLoading = () => loading && <p>cargando...</p>;

    

    return (
        <div className={style.container_form}>
            <Form
                fields={formFields}
                onSubmit={handleSubmit}
                customClass="form-login"
            />
            {isLoading()}
            {error && error}
        </div>
    )
};

export default Login;