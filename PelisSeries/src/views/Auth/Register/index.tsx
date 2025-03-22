import Form from "../../../components/common/Form";
import { useRegister } from "../../../hooks/useRegister";
import { FieldForm } from "../../../interfaces/components/IFrom";
import style from "./styles.module.css";

const formFieldsStep1: FieldForm[] = [
    { id: "name", type: "text", placeHolder: "Ingrese su nombre", required: true, accesskey: "name", label: "Nombre", },
    { id: "phone", type: "text", placeHolder: "Ingrese su número de teléfono", required: true, accesskey: "phone", label: "Teléfono", },
    { id: "email", type: "email", placeHolder: "Ingrese su correo electrónico", required: true, accesskey: "email", label: "Correo electrónico", },
];

const formFieldsStep2: FieldForm[] = [
    { id: "password", type: "password", placeHolder: "Ingrese su contraseña", required: true, accesskey: "password", label: "Contraseña", },
    { id: "confirmPassword", type: "password", placeHolder: "Confirme su contraseña", required: true, accesskey: "password", label: "Confirmar contraseña", },
];

const Register = () => {

    const { step, nextStep, prevStep, handleSubmit } = useRegister();

    return (
        <div className={style.container_form}>
            <div className={` ${style.form_step}  ${step === 1 ? style.active : ""} ${style.container_form_step}`}>
                <Form fields={formFieldsStep1} onSubmit={nextStep} />
            </div>

            <div className={` ${style.form_step}  ${step === 2 ? style.active : ""} ${style.container_form_step}`}>
                <Form
                    fields={formFieldsStep2}
                    onSubmit={handleSubmit}
                    btnSecondary={[{ children: "Atrás", className: "solid", fuction: prevStep, type: "button" }]}
                />
            </div>

        </div>
    );
};

export default Register;
