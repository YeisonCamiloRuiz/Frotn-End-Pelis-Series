import Form from "../../../components/common/Form";
import { FieldForm } from "../../../interfaces/components/IFrom";
import style from "./style.module.css";

const RecoveryPassword = () => {

    const fieldsForm:FieldForm[] = [
        {
            accesskey: "email",
            type: "email",
            label: "Email",
            required: true,
            placeHolder: "Ingresa tu email",
            id: "email",
            className:"input_login"
        }
    ]

    const onSubmit = (data:Record<string,string>) => {

    }
    return (
        <div className={style.container}>
            <div className={style.container_form}>
                <p>
                    Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
                </p>
                <Form
                    fields={fieldsForm}
                    onSubmit={onSubmit}
                />
            </div>

        </div>
    );
}

export default RecoveryPassword;