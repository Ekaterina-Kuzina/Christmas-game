import React from "react"
import startPageStyle from './start-page.module.css'
import Button from '../../components/button/button'
export default function StartPage () {
    return (
        <div className = {startPageStyle.wrapper}>
            <div className={startPageStyle.start_info}>Помогите бабушке нарядить елку</div>
            <Button text = "Начать"/>
        </div>
    )
}