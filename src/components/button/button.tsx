import React from "react";
import buttonStyle from './button.module.css'


type ButtonProps = {
    text:string
}
export default function Button ({text}:ButtonProps) {
    return (
        <button className={buttonStyle.btn}>{text}</button>
    )
}