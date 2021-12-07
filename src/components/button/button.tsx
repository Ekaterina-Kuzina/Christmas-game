import React from "react";
import buttonStyle from './button.module.css'
import {Link} from 'react-router-dom'
type ButtonProps = {
    text:string
}
export default function Button ({text}:ButtonProps) {
    return (
        <Link  to="/toys">
            <button className={buttonStyle.btn}>{text}</button>
        </Link> 

    )
}