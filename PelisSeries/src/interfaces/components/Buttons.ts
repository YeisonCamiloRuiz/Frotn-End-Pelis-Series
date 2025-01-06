import React from "react";

export interface ButtonProps{
    children:React.ReactNode;
    label?:string;
    className?:"clear" | "solid" | "out_line";
    customClass?:string;
    icon?:string;
    slotIcon?:"left" | "right" | "icon-only";
    fuction?:() => void;
}