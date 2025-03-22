import styles from "./style.module.css"
import { ButtonProps } from "../../../interfaces/components/IButtons"
import { ReactSVG } from 'react-svg';



const Button = ({children,label,className = "solid",customClass = "",icon,slotIcon = "left", type, disabled, fuction}:ButtonProps) => {
    const renderIcon = icon ? <ReactSVG src={icon} className="icon" /> : null;
    return(
        <button disabled={disabled} type={type} onClick={fuction} className={`${styles.btn_primaty} ${styles[className]} ${styles[customClass]} ${disabled ? styles.disabled : ""}` }>
            {slotIcon === "left" && renderIcon}
            {children || label}
            {slotIcon === "right" && renderIcon}
        </button>
    )
}

export default Button;