import styles from "./style.module.css"
import { ButtonProps } from "../../../interfaces/components/Buttons"
import { ReactSVG } from 'react-svg';



const Button = ({children,label,className = "solid",customClass = "",icon,slotIcon = "left", fuction}:ButtonProps) => {
    
    const renderIcon = icon ? <ReactSVG src={icon} className="icon" /> : null;

    return(
        <button onClick={fuction} className={`${styles.btn_primaty} ${styles[className]} ${customClass}` }>
            {slotIcon === "left" && renderIcon}
            {children || label}
            {slotIcon === "right" && renderIcon}
        </button>
    )
}

export default Button;