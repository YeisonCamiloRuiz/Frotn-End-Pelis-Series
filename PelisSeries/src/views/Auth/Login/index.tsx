
import Form from "../../../components/common/Form";
import { useLogin } from "../../../hooks/useLogin";
import { FieldForm } from "../../../interfaces/components/IFrom";
import style from "./styles.module.css"

const Login = () => {
    const { error,formFields,handleSubmit,loading } = useLogin();
    const isLoading = () => loading && <p>cargando...</p>;

    return (
        <div className={style.container_form}>
            <Form
                fields={formFields as FieldForm[]}
                onSubmit={handleSubmit}
                customClass="form-login"
            />
            {isLoading()}
            {error && <p className={style.error}>{error}</p>}
        </div>
    )
};

export default Login;