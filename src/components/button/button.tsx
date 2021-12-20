import React from "react";
import buttonStyle from './button.module.css'


type ButtonProps = {
    text:string
    paddingStyle: string
    onClick?:()=> void
}
export default function Button ({text, paddingStyle,onClick }:ButtonProps) {
    return (
        <button onClick={onClick} className={buttonStyle.btn} style ={{padding: paddingStyle}}>{text}</button>
    )
}