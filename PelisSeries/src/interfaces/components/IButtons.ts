import React from "react";

export interface ButtonProps{
    children:React.ReactNode;
    type:"button" | "submit" | "reset" | undefined
    label?:string;
    className?:"clear" | "solid" | "out_line";
    customClass?:string;
    icon?:string;
    disabled?:boolean;
    slotIcon?:"left" | "right" | "icon-only";
    fuction?:() => void;
}