import Item from "../../common/Item";
import styles from "./style.module.css"
import home_outline from "../../../assets/icons/home_outline.svg"
import videocam_outline from "../../../assets/icons/videocam_outline.svg"
import desktop_outline from "../../../assets/icons/desktop_outline.svg"
import login from "../../../assets/icons/log_in_outline.svg"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {

    const location = useLocation();
    const [ path, setPath ] = useState("")

    useEffect(()=>{
        setPath(location.pathname.split("/")[1])
    },[location])

    const listModules = [
        { text:"Inicio" , icon:home_outline , path:"/" },
        { text:"Peliculas" , icon:videocam_outline , path:"/movies" },
        { text:"Series" , icon:desktop_outline , path:"/series" },
        { text:"Inicio de sesion" , icon:login , path:"/login" },
    ]
    
    return(
        <header className={styles.header}>
            <nav className={styles.nav_container_items}>
                {listModules.map((module,index)=>(
                    <Item 
                        key={index} 
                        icon={module.icon} 
                        path={module.path}
                        customClass={path === module.path.split("/")[1] ? "select" : ""}
                    >
                        {module.text}
                    </Item>
                ))}
            </nav>
        </header>
    )
};


export default Header;