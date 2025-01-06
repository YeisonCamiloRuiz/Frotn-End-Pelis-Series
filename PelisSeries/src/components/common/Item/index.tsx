import React from "react";
import styles from "./style.module.css"
import { Link } from "react-router-dom";
import { ReactSVG } from 'react-svg';

interface ItemProps{
    children:React.ReactNode;
    solot?:"left" | "right",
    icon:string;
    path:string;
    customClass?:string;
}

const Item = ({ children, solot="left", icon, path, customClass="" }:ItemProps) => {

    const renderIcon =  <ReactSVG src={icon} className="icon" />;

    return(
        <Link className={`${styles.item_linck} ${styles[customClass]}`} to={path}>
            {solot === "left" && renderIcon}
            {children}
            {solot === "right" && renderIcon}
        </Link>
    )
}

export default Item;