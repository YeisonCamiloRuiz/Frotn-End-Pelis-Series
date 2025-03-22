import { Link } from "react-router-dom";
import style from "../../styles.module.css"

const TextRecoveryPassword = () => {
    return(
        <div className={style.text_recovery_password}>
            <Link to="/register">
                Aun no tienes cuenta?
            </Link>
            <Link to="/recovery-password">
                Recuperar contraseña
            </Link>
        </div>
    )
};

export default TextRecoveryPassword;